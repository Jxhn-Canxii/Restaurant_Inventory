<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

///rule based AI
class PermitPredictionService
{
    private $logPath;

    public function __construct()
    {
        $this->logPath = storage_path('app/prediction/logs.json');
    }

    // Function to log prediction details to a JSON log file
    private function logData(array $data)
    {
        $logEntries = file_exists($this->logPath) ? json_decode(file_get_contents($this->logPath), true) : [];
        $logEntries[] = $data;
        file_put_contents($this->logPath, json_encode($logEntries, JSON_PRETTY_PRINT));
    }

    // Function to define rules and predict zoning permit approval
    public function predict(array $data) 
    {
        // Retrieve the relevant rule from the database based on the zoning district
        $rule = DB::table('rules')
            ->where('zoning_district', $data['zoning_district'])
            ->first();
    
        // Check if the rule exists
        if (!$rule) {
            // If no rule found for the given zoning district, deny the permit
            return [
                'status' => 3,
                'message' => 'Zoning district not found in the rules table'
            ];
        }
    
        // Initialize log data
        $logData = [
            'timestamp' => now()->toDateTimeString(),
            'status' => 3, // Denied by default
            'message' => 'Test'
        ];
    
        // Initialize an empty array to store reasons for denial
        $reasons = [];
    
       // Remove brackets and convert the string into an array of integers
        $acceptableLandRights = array_map('intval', explode(',', trim($rule->acceptable_land_rights, '[]')));

        // Ensure right_over_land is an integer for comparison
        $rightOverLand = (int) $data['right_over_land'];

        // Rule 1: Check if the land right is valid
        if (!in_array($rightOverLand, $acceptableLandRights, true)) {
            $reasons[] = 'Invalid land right';
        }


    
        // Rule 2: Check if the lot area is large enough to the required max area
        if ($data['lot_area'] > $rule->maximum_lot_area) {
            $reasons[] = 'Lot area too big';
        }
    
        // Rule 3: Check if the lot area is less enough to the required min area
        if ($data['lot_area'] < $rule->minimum_lot_area) {
            $reasons[] = 'Lot area too small';
        }
    
        // Rule 4: Check setback compliance if required
        if ($rule->setback_compliance_required && !$data['setback_compliance']) {
            $reasons[] = 'Setback non-compliant';
        }
    
       // Mapping of zoning district values
        $zoningDistricts = [
            1 => 'residential',
            2 => 'commercial',
            3 => 'industrial'
        ];

        // Mapping of proposed use values
        $proposedUses = [
            1 => 'single-family',
            2 => 'multi-family',
            3 => 'retail',
            4 => 'office',
            5 => 'mixed-use'
        ];

        // Convert zoning district and proposed use to their respective labels
        $zoningDistrict = $zoningDistricts[$data['zoning_district']] ?? null;
        $proposedUse = $proposedUses[$data['proposed_use']] ?? null;

        // Rule 5: Ensure proposed use matches the zoning district (for residential zone)
        if ($zoningDistrict === 'residential' && in_array($proposedUse, ['retail', 'office', 'mixed-use'])) {
            $reasons[] = 'Proposed use not allowed in residential zone';
        }

        // Rule 6: Ensure proposed use fits zoning district (for commercial zone)
        if ($zoningDistrict === 'commercial' && $proposedUse === 'single-family') {
            $reasons[] = 'Single-family use not allowed in commercial zone';
        }

        // Rule 7: Restrict residential and commercial uses in industrial zones
        if ($zoningDistrict === 'industrial' && in_array($proposedUse, ['single-family', 'multi-family', 'retail', 'office'])) {
            $reasons[] = 'Proposed use not allowed in industrial zone';
        }
        
        // If there are reasons for denial, update the log message
        if (count($reasons) > 0) {
            $logData['message'] = 'Denied: ' . implode(', ', $reasons);
        } else {
            // If no reasons for denial, approve the permit
            $logData['message'] = 'Approved';
            $logData['status'] = 2; // Approved status
        }
    
        // Log the decision and the reasons
        $this->logData($logData);
    
        return $logData;
    }
    
    
}
