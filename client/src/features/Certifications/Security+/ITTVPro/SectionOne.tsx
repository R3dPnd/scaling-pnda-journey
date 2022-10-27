import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent, DialogContentText } from '@mui/material';
import { TurnSharpLeft } from '@mui/icons-material';

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
                        Applications themselves also pose a security risk. Websites and servers rinning applications can be 
                        exploited and they need to be protected against users meaning ill itent. If a user is given too much
                        freedom and thier inputs are not properly taken as a potential threat, n attacker can gaon access they
                        should not have.
                    </p>
                    <ul>
                        <li>SQL Injecion: Running SQL querries against a DB through an exposed application service.</li>
                        <li>LDAP Injection: Similar to SQL injction but with LDAP commands. Lightweight Directory Acces Protocol</li>
                        <li>XML Injection: ...</li>
                        <li>DLL Injection: Dynamic Linked Library...(windows binary)</li>
                        <li>CMD Injection: Direct server commands...</li>
                        <li>System Resources: Exploiting things like drivers</li>
                        <li>Race Conditions: Inerupting running proceses and chining them together to give higher level access.</li>
                        <li>TOC/TOU: Time of check, time of use. This is a file coruption when there are dirty reads</li>
                        <li>Pointer/Obj Dereference: When the program leaves a memory reference open, malware can be put into the system.</li>
                        <li>Integer Overflow: When putting numbers larger or smaller than a reference can take, this will overflow and put data out of scope.</li>
                        <li>XSS: Script injection through malicous scripts being run as a known script.</li>
                        <li>XSRF: Interception of valid user credentials to authenticate into a system.</li>
                        <li>Replay Attacks: A repitition of data by an attacker after capturing and evaluation of the request, typocally the authentication request.</li>
                        <li>DOS: An attack on a system to interupt a service, likely from repeated connections</li>
                        <li>DDOS: A wide attack from multiple sources to take down and overwelm a system. Reflected-A spoofed ip addres that mimics the target to falsly request a service. Amplified-Requestuing a service to the target from a botnet with increasing payloads. Coordinated-Many individual ips atacking an exposed port</li>
                        <li>Man-in-the-middle: A malicous user hijacking communications.This in can be in the form of packet sniffing.</li>
                        <li>Man-in-the-browser: Simialr concept, but with a web browser plugin or hyjacking a cookie with more data than is necessary.</li>
                        <li>Evil Twin: Setting up an access point that mimics a legitamte one. A Pinapple could cause a DOS attack by keeping users off the needed network.</li>
                        <li>Disasocciation Attack: This is a request to a network to dissacosiate the attacked device my spoofing their ip.</li>
                    </ul>

                    <p>
                        Network Attacks can be veried across the layers and have large scale reprocusions for users and machines 
                        across a network. This can cause invisable problems and issues on machines without direct human interaction. 
                        These problems need to be discovered
                    </p>
                    <ul>
                        <li>DNS Attacks: Attacks mimicing or modefying the DNS of a network, including the DNS server and the local DNS tables.</li>
                        <li>Layer 2 Attacks: Attacks on the Data Link layer. This is local netwok ersolution. This includes AARP malipulation.</li>
                    </ul>

                    <p>
                        Another easy attack vector is passwords and paticulary password hashing. If a system doesn't stop a user 
                        from inputing passwords, the attacker can attempt to brute force the password with commonly used pwds or
                        using bits and pieces of know information to try to guess a users pwd. If passwords are dumped, a user can 
                        use tools to brute force the pwd hash to find user passwords once they have been exposed.
                    </p>
                    <h5>PW Cracking Tools:</h5>
                    <ul>
                        <li>Jack the Ripped</li>
                        <li>Hashcat</li>
                        <li>Hydra</li>
                        <li>Pack</li>
                        <li>CEWL</li>
                        <li>PortSwigger</li>
                    </ul>

                    <p>
                        There are widly known vulnerabilities all security professionals should keep in mind and be aware of.
                    </p>
                    <ul>
                        <li>Defaults: Default pwds and configurations are openly known and should always be changed.</li>
                        <li>Weak/no Enccryption</li>
                        <li>Unsecure Protocols: HTTP vs HTTPS, FTP vs SFTP etc.</li>
                        <li>Open Permission: Giving all access to machines on a network. This is ususally a vuln from laziness</li>
                        <li>Third Party Vulns: When directly integrating with another company, there risks become yours. IP theft, ID/cred theft etc.</li>
                    </ul>

                    <p>
                        Threat Intelligence is a key part of the security lanscape. It's the process of gathering data to identify
                        potential threats. Many tools for this are actualy open source and easily learned and utilized. Ampther aspect 
                        is threat mapping. There are Real-time data streams that provide information about threats in the wild directly
                        from security experts. These feeds could contain things like Domain Reputations, Known Malware, IP Addresses,
                    </p>
                    <h5>OSTI Tools:</h5>
                    <ul>
                        <li>Maltego</li>
                        <li>recon-ng</li>
                        <li>Shodan.io/Censys.io</li>
                    </ul>
                    <h5>Vulnerability DBs:</h5>
                    <ul>
                        <li>MITRE: Common Vuln and Exposure(CVE)</li>
                        <li>NVD(National Vulnerability Database): Security Content Automation Protocol</li>
                    </ul>
                </DialogContentText>
            </DialogContent>
        </>
    )
}