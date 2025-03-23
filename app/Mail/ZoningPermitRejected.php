<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ZoningPermitRejected extends Mailable
{
    use Queueable, SerializesModels;

    public $permit;

    public function __construct($permit)
    {
        $this->permit = $permit;
    }

    public function build()
    {
        return $this->subject("Your Zoning Permit Application Was Rejected")
                    ->view('emails.zoning_rejected');
    }
}
