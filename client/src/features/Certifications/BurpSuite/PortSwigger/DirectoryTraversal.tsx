export default function() {
    return(
        <>
            <h5>Directory Traversal</h5>
            <p>
                DT is a vuln that allows a user to read files stored on a server. These 
                files tend to contain sensative data including creds and other secrets. 
                They can also utilize this to write and execute code directly on a server.
            </p>

            <h5>Lab 1: File path traversal, simple case</h5>
            <p>
                This lab contains a file path traversal vulnerability in the display of 
                product images. To solve the lab, retrieve the contents of the /etc/passwd file.
            </p>
            <p>
                Very simple example. The API when reaching for assets takes in the path as input 
                values from the web page. You can just edit this to find the passwrod file which in 
                linux is at home/etc/passwrd
            </p>

            <h5>Common obstacles to exploiting file path traversal vulnerabilities</h5>
            <p>
                There are a number of ways to bypass path auth.
            </p>
            <ul>
                <li>Absolute Pathing</li>
            </ul>

            <h5>Lab 2: File path traversal, traversal sequences blocked with absolute path bypass</h5>
            <p>
                This lab contains a file path traversal vulnerability in the display of product images.
                The application blocks traversal sequences but treats the supplied filename as being 
                relative to a default working directory.To solve the lab, retrieve the contents of the 
                /etc/passwd file.
            </p>
            <p>
                This lab is very similar but requires a deeper understanding of the target. By giving 
                the full path to the pwd file we are able to retrieve it.
            </p>

            <h5>Lab 3: File path traversal, traversal sequences stripped non-recursively</h5>
            <p>
                This lab contains a file path traversal vulnerability in the display of product images. 
                The application strips path traversal sequences from the user-supplied filename before 
                using it. To solve the lab, retrieve the contents of the /etc/passwd file.
            </p>
            <p>
                This lab makes use of common scrubbing. By wrapping the traverasl in a set which is removed, 
                the result is what we want ex. ....// when scrubbed is ../
            </p>

            <h5>Lab 4:</h5>
            <p></p>
            <p></p>

            <h5>Lab 5:</h5>
            <p></p>
            <p></p>
        </>
    )
}