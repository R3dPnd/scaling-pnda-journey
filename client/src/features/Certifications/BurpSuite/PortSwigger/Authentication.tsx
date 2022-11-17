export default function() {
    return(
        <>
            <h5>Authentication</h5>
            <p>
                Authentication is the process ot verifying id. Simply the process for identifying who someone is, not
                Authorization which is what a person is allowed to do. Typically a breakdown occurs when the auth mechs
                are weak and allow brute force techniques or there are logic flaws from a bad coding impl. If an attacker
                can gain the Authorization from gainig the Authentication, an attacker had the level of access of the 
                person they are pretending to be and can do all the thigns they are allowed to do. It can also be 
                mis-attributed to this person as well.
            </p>

            <h5>Password-based Vulns</h5>
            <p>
                Typically a password is vulnerable if it is easily guessed or transmitted in a readable way, either with 
                weak encryption or in plain text.
            </p>
            <h5>Lab 1: Username enumeration via different responses</h5>
            <p>
                This lab is vulnerable to username enumeration and password brute-force attacks. It has an account with 
                a predictable username and password, which can be found in the following wordlists:
            </p>
            <p>
                Simple lab, if we have a list of pwds and uns with a validation that specifies incorrect usernames, we 
                can send the un at it until we get a hit and run the pwds against the valid uns. This also means there
                is no limit to prevent brute forcingh a users pw, which seems unlikely. 
            </p>

            <h5>Lab 2:Username enumeration via subtly different responses</h5>
            <p>
                This lab is subtly vulnerable to username enumeration and password brute-force attacks. It has an 
                account with a predictable username and password, which can be found in the following wordlists:
            </p>
            <p>
                The difference on this is very subltle. I'm not sure I would catch this if it wasn't ovbious, but it's 
                possible with enough greping you could come accross this. It's clearly got the same flaw as lab 1 though.
            </p>

            <h5>Lab 3: Username enumeration via response timing</h5>
            <p>
                This lab is vulnerable to username enumeration using its response times. To solve the lab, enumerate a 
                valid username, brute-force this user's password, then access their account page.
            </p>
            <p>
                This lab was a little more involved. To pass this you must utilize the X-Forwarded-For header to bypass the 
                brute force protectiopns on the site. I'm sure this helops, but seems like once you run for a specific account
                This header will be useless. But by entering differeent values there you are able to compare teh amount of
                response time each request takes. IT takes longer for long passwords with right user names since the API is 
                processing the value for authenticity. Once you have the user name do the same with the pw and look for the 302 
                response.
            </p>

            <h5>Lab 4: Broken brute-force protection, IP block</h5>
            <p>
                This lab is vulnerable due to a logic flaw in its password brute-force protection. To solve the lab, brute-force 
                the victim's password, then log in and access their account page.
            </p>
            <p>
                The flaw in the auth in this lab is that the bad login resetes itself after a successful login. Given a username and 
                your own credentials, you can layer in you correct creds into the pw guesses and the target account name.
            </p>

            <h5>Lab 5: Username enumeration via account lock</h5>
            <p>
                This lab is vulnerable to username enumeration. It uses account locking, but this contains a logic flaw. To solve the 
                lab, enumerate a valid username, brute-force this user's password, then access their account page.
            </p>
            <p>
                The first step here is finding a valid acount, Only real accounts get locked out, so if you lock out the list you can see 
                which accounts are real. After that, the account is locked out but a successful attempt will tell you the account has been 
                locked down. find this response and you have teh right pw.
            </p>
        </>
    )
}