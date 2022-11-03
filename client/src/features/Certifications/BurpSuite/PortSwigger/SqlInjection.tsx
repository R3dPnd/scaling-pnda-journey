export default function () {
    return (
        <>
            <p>
                This a vulenrability tyhat allows DB commands to be directly passed in by an attacker. This can cause
                A data dump, data loss, data corruption, and many other issues. These tend to be easily detected using
                BurpSuite tools.
            </p>

            <p>
                The best way to avoid this is peramiterized querries that take input as string literals and will not
                run user input as valid SQL.
            </p>
            <h5>Lab 1: Retrieving hidden data</h5>
            <p>
                This lab contains an SQL injection vulnerability in the product category filter. When the user selects
                a category, the application carries out an SQL query like the following:SELECT * FROM products WHERE
                category = 'Gifts' AND released = 1 To solve the lab, perform an SQL injection attack that causes the
                application to display details of all products in any category, both released and unreleased.
            </p>
            <p>
                The solution to this lab is to run the application in the BurpSuit browser and in the request sent
                and make catagory='+OR+1=1-- this gets used in the query sent to the API to
                SELECT * FROM products WHERE category = 'Gifts' OR 1=1--' AND released = 1 as apposed to
                SELECT * FROM products WHERE category = 'Gifts'--' AND released = 1
            </p>

            <h5>Lab 2: SQL injection vulnerability allowing login bypass</h5>
            <p>
                Consider an application that lets users log in with a username and password. If a user submits the
                username wiener and the password bluecheese, the application checks the credentials by performing
                the following SQL query:SELECT * FROM users WHERE username = 'wiener' AND password = 'bluecheese'If
                the query returns the details of a user, then the login is successful. Otherwise, it is rejected.Here,
                an attacker can log in as any user without a password simply by using the SQL comment sequence -- to
                remove the password check from the WHERE clause of the query. For example, submitting the username
                administrator'-- and a blank password results in the following query:SELECT * FROM users WHERE
                username = 'administrator'--' AND password = ''This query returns the user whose username is
                administrator and successfully logs the attacker in as that user.
            </p>
            <p>

            </p>

            <h5>Lab 3: SQL injection in different contexts</h5>
            <p>
                In all of the labs so far, you've used the query string to inject your malicious SQL payload. However,
                it's important to note that you can perform SQL injection attacks using any controllable input that is
                processed as a SQL query by the application. For example, some websites take input in JSON or XML format
                and use this to query the database.These different formats may even provide alternative ways for you to
                obfuscate attacks that are otherwise blocked due to WAFs and other defense mechanisms. Weak implementations
                often just look for common SQL injection keywords within the request, so you may be able to bypass these
                filters by simply encoding or escaping characters in the prohibited keywords. For example, the following
                XML-based SQL injection uses an XML escape sequence to encode the S character in SELECT:
            </p>
            <p>
                Using the repeater application you can resend the request with the encoded response with the SQL payload in
                it. The main point of this exploit is the XML payload even when scrubbed can be escaped. The Hackvector
                pluggin gives you a quickway to encode your payload and this is read correctly by the application allowing
                for the SQL injection.
            </p>

            <h5>Lab 4: SQL injection UNION attack, determining the number of columns returned by the query</h5>
            <p>
                This lab contains an SQL injection vulnerability in the product category filter. The results from the query
                are returned in the application's response, so you can use a UNION attack to retrieve data from other tables.
                The first step of such an attack is to determine the number of columns that are being returned by the query.
                You will then use this technique in subsequent labs to construct the full attack.To solve the lab, determine
                the number of columns returned by the query by performing an SQL injection UNION attack that returns an
                additional row containing null values.
            </p>
            <p>
                This lab is using sort by to determine how many columns returned by the query exposed in the catagory filter.
                We use this result to determine how we might leverage a union attack to get hidden data in other tables. The
                end goal is to just determine the number of columns.
            </p>
            <p>
                The UNION operator combines the results from two table queries. It requires that the result sets have the same
                number of columns retruned. This means knowing how many coklumns we have access to is greatly appretiated.
            </p>
            <div className="box">
                <table>
                    <th>a</th><th>b</th>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                </table>
                <table>
                    <th>c</th><th>d</th>
                    <tr>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                </table>
            </div>

            <p>
                Query 1: select a,b from table1
            </p>
            <p>
                1,2 3,4
            </p>
            <p>
                Query 2: select a,b from table1 UNIOM select c,d from table2
            </p>
            <p>
                1,2 3,4 2,3 4,5
            </p>
            <p>
                Query 2: select a,b from table1 UNIOM select username, password from USER
            </p>
            <p>
                1,2 3,4 2,3 4,5
            </p>

            <h5>Lab 5: SQL injection UNION attack, finding a column containing text</h5>
            <p>
                This lab contains an SQL injection vulnerability in the product category filter. The results from the query
                are returned in the application's response, so you can use a UNION attack to retrieve data from other tables.
                To construct such an attack, you first need to determine the number of columns returned by the query. You can
                do this using a technique you learned in a previous lab. The next step is to identify a column that is compatible
                with string data.The lab will provide a random value that you need to make appear within the query results. To
                solve the lab, perform an SQL injection UNION attack that returns an additional row containing the value provided.
                This technique helps you determine which columns are compatible with string data.
            </p>
            <p>
                Simple lab that allows you to enter in string values until success. Another Union criteria is that they must eb the
                same type. Since the table you are creating can retrun any type and null matches any type in theory, you can pluggin
                values of different types to match the types the query is looking for, giving you insight on this table.
            </p>

            <h5>Lab 6: SQL injection UNION attack, retrieving data from other tables</h5>
            <p>
                This lab contains an SQL injection vulnerability in the product category filter. The results from the query are returned
                in the application's response, so you can use a UNION attack to retrieve data from other tables. To construct such an
                attack, you need to combine some of the techniques you learned in previous labs.The database contains a different table
                called users, with columns called username and password.To solve the lab, perform an SQL injection UNION attack that
                retrieves all usernames and passwords, and use the information to log in as the administrator user.
            </p>
            <p>
                Knowing the make up of a standard users table, we are able to retrieve the string values from this table knowing the inital
                query also contains string values with 'UNION+SELECT+username,password+FROM+USERS+--
            </p>

            <h5>Lab 7: SQL injection UNION attack, retrieving multiple values in a single column</h5>
            <p>
                This lab contains an SQL injection vulnerability in the product category filter. The results from the query are returned in
                the application's response so you can use a UNION attack to retrieve data from other tables.The database contains a different
                table called users, with columns called username and password.To solve the lab, perform an SQL injection UNION attack that
                retrieves all usernames and passwords, and use the information to log in as the administrator user.
            </p>
            <p>
                Since only one string value exsists on teh query, we have to concatinate the username and password fields using ||. in this case
                we use 'UNION+SELECT+NULL,username||'-'||password+from+USERS--
            </p>
            <div className="box">
                <h5>Common DB Queries</h5>
                <table>
                    <th>Database Type</th><th>Query</th>
                    <tr>
                        <td>Microsoft,MySQL</td>
                        <td>SELECT @@version</td>
                    </tr>
                    <tr>
                        <td>Oracle</td>
                        <td>SELECT * FROM v$version</td>
                    </tr>
                    <tr>
                        <td>PostgreSQL</td>
                        <td>SELECT version() </td>
                    </tr>
                </table>
            </div>

            <h5>Lab 8: SQL injection attack, querying the database type and version on Oracle</h5>
            <p>
                This lab contains an SQL injection vulnerability in the product category filter. You can use a UNION attack to retrieve the
                results from an injected query.To solve the lab, display the database version string.
            </p>
            <p>
                The solution here is to first determine that the query is returning two values, the first is a string wich we can use to our
                advantage. We can escape the query as normal and using what we know of Oracle, we can find the version from the Banner column
                from the $version table with the following query; '+UNION+SELECT+BANNER,+NULL+FROM+v$version--
            </p>

            <h5>Lab 9: SQL injection attack, querying the database type and version on MySQL and Microsoft</h5>
            <p>
                This lab contains an SQL injection vulnerability in the product category filter. You can use a UNION attack to retrieve the 
                results from an injected query.To solve the lab, display the database version string.
            </p>
            <p>

            </p>

            <h5>Lab 10: SQL injection attack, listing the database contents on non-Oracle databases</h5>
            <p>
                This lab contains an SQL injection vulnerability in the product category filter. The results from the query are returned in 
                the application's response so you can use a UNION attack to retrieve data from other tables.The application has a login 
                function, and the database contains a table that holds usernames and passwords. You need to determine the name of this table 
                and the columns it contains, then retrieve the contents of the table to obtain the username and password of all users.To solve 
                the lab, log in as the administrator user.
            </p>
            <p>
                This lab had quite a few steps. You really need to map out the DB nd look for all available infosince the names weren't quite
                defaults. It requires som intemate knowledge of querying the specific db type for table and row values.
            </p>
            <ol>
                <li>Map out column numbers and types</li>
                <li>Query for the tables that contained user in them</li>
                <li>Query user table for rows containing un and pw</li>
                <li>Query for these values</li>
            </ol>
        </>
    )
}