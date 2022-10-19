import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent, DialogContentText } from '@mui/material';

export default function () {

    return (
        <>
            <DialogTitle id="alert-dialog-title">
                Threats, Attacks, and Vulnerabilities
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <p>
                        Cyber security threats expand further than just cyberspace. The biggest threat facing companies today
                        is people. Many modern exploits target the users of applications rather than the underlying tech. It's
                        much more difficult to defend against this attack, but ensuring employees are aware of these threats 
                        and means to recognize them and combat them as they pop up.
                    </p>
                    <ul>
                        <li>Phishing</li>
                        <li>Vishing</li>
                        <li>...</li>
                    </ul>
                    <p>
                        There are also a suite of Malware and they tend to fall into a set of catagories. These applications have
                        different attack vetors and capabilites. There are scans that can detect before these viruses are released,
                        but once they are in a system they can be extremely haard to remove and the damage might already be done.
                    </p>
                    <ul>
                        <li>Macro: Small programs that run within other applications such as Word and Excel</li>
                        <li>Bootstrap: Programs that are set to run at start up by attakcing the boot sector</li>
                        <li>Attachment: Programs attacked to emails</li>
                        <li>File Injection: Files injected into an exsisting program</li>
                        <li>Polymorphic: Malware that changes to avoid signature detection</li>
                        <li>Network: Viruses that propegate throughout a network</li>
                        <li>Worms: A replicating program that doesn't relay on a host. Typically used to eat up resources.</li>
                        <li>Fileless: Stealthy virus running only in memory. Typically passed from attachments.</li>
                        <li>Rootkit: Apps that getand run as Root. They are hard to detect once they have low level access.</li>
                    </ul>
                    <p>
                        Another easy attack vector is passwords and paticulary password hashing. If a system doesn't stop a user 
                        from inputing passwords, the attacker can attempt to brute force the password with commonly used pwds or
                        using bits and pieces of know information to try to guess a users pwd.
                    </p>
                    Tools:
                    <ul>
                        <li>Jack the Ripped</li>
                        <li>Hashcat</li>
                        <li>Hydra</li>
                        <li>Pack</li>
                        <li>CEWL</li>
                        <li>PortSwigger</li>
                    </ul>
                </DialogContentText>
            </DialogContent>
        </>
    )
}