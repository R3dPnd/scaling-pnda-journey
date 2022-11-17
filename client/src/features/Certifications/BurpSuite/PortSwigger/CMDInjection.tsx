export default function () {
    return (
        <>
            <h5>OS command injection</h5>
            <p>
                AKA shell injection allows you to run legitamate OS cmds on a server histing the web app.
                This can leak important data or allow an attacker to gain full control over the server. It
                can alwso be used to pivot to another more secure server that holds more important data.
            </p>

            <h5>Useful Commands</h5>
            <div className="box">
                <table>
                    <th>Purpose of cmd</th>
                    <th>Linux</th>
                    <th>Windows</th>
                    <tr>
                        <td>Name of current user</td>
                        <td>whoami</td>
                        <td>whoami</td>
                    </tr>
                    <tr>
                        <td>Operating system</td>
                        <td>uname -a</td>
                        <td>ver</td>
                    </tr>
                    <tr>
                        <td>Network config</td>
                        <td>ifconfig</td>
                        <td>ipconfig /all</td>
                    </tr>
                    <tr>
                        <td>Nertwork conn</td>
                        <td>netstat -an</td>
                        <td>netstat -an</td>
                    </tr>
                    <tr>
                        <td>Running processes</td>
                        <td>ps -ef</td>
                        <td>tasklist</td>
                    </tr>
                </table>
            </div>

            <h5>Lab 1: OS command injection, simple case</h5>
            <p>
                This lab contains an OS command injection vulnerability in the product stock checker. The
                application executes a shell command containing user-supplied product and store IDs, and
                returns the raw output from the command in its response. To solve the lab, execute the
                whoami command to determine the name of the current user.
            </p>
            <p>
                This is realativly simple. The requerst which takes in the store id can also use an exit
                character to run OS commnds |whoami which can return user data.
            </p>

            <h5>Blind OS CMD Injection</h5>
            <p>

            </p>

            <h5>Lab 2: Blind OS command injection with time delays</h5>
            <p>
                This lab contains a blind OS command injection vulnerability in the feedback function. The
                application executes a shell command containing the user-supplied details. The output from
                the command is not returned in the response. To solve the lab, exploit the blind OS command
                injection vulnerability to cause a 10 second delay.
            </p>
            <p>
                
            </p>

            <h5></h5>
            <p></p>
            <p></p>

            <h5></h5>
            <p></p>
            <p></p>

            <h5></h5>
            <p></p>
            <p></p>
        </>
    )
}