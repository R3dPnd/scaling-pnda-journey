import { WorkHistory } from "../../interface/WorkHistory";

const WorkHistories: WorkHistory[] = [
    {
        company: "Microsoft",
        title: "Software Developer II",
        description: "string",
        achievements: [
            "The Office 365 Suite of applications occasionally have issues that cause customers to reach out to the Microsoft help desk. This takes real people real time. The application I iterated on diverted these tickets by troubleshooting common problems and resolving them programmatically, saving time and money for Microsoft and our customers.",
            "For new packages used by our application for troubleshooting Office 365 applications, it requires a command line based deployment with very little feedback. I created an internal site for which developers could upload these packages and verify their location. This saved developers time and hassle when updating these important packages.",
            "Customers which deploy their applications to Azure need a way to track where they are in the process and who they need to reach out too for approvals. They also want a way to keep track of their deployment status and collect metrics about failed or stalled deployments. I iterated on an application which tracks these deployments and approvals, and added the ability to track deployment status after approval. This helps developers improve their processes and expedite their deployments."
        ],
    },
    {
        company: "Chase",
        title: "Senior Associate",
        description: "string",
        achievements: [
            "A long running application that tracks the process of certain personal loans pertaining to apartment complexes from Letter of Intent, too funded was being developed in New Jersey, while the users of this application were located in Seattle. I was brought on the new team in Seattle to take on the development of this application.",
            "The application our team was working on, originally developed by another team, was a monolithic application that had many out dated components and deign patterns that made working on this application difficult and made the functionalities directly tied to itself, not allowing other applications to leverage the work we had done. I created small micro services that leveraged modern technologies and design patterns to replace the legacy system. This allowed out work to be used by other applications and teams with Chase and made the system as a whole more maintainable.",
            "The Data stored in our application was collected primarily with direct interactions with sales team members through emails. Faxes, and phone calls. This made the process time consuming and didn’t easily allow customers the ability to see their loan status or what steps they were needing to take to expedite their loan process. I created a pipeline that quickly flattened the required data and sent the most recent up to date information to another internal team that was creating a portal to expose the data to the client, securely and quickly. This allowed customers to get a better view of their loan and provide documents as needed where any sales member could quickly access them.",
            "Many of our automated tasks were being done by a very large application with all tasks interwoven into one large application. There were many instances of the same application running and doing very different jobs using different configurations. This functionality was based around a table back queue that kept track of multiple configurable threads. When a new job was required, more code would be piled on to the existing application, making the problem larger and making maintain ace of these jobs very difficult. I pulled out only the code concerning this multi threaded table back queue, so that I can be leveraged my brand new applications that only needed the code pertaining to their job. This made it usable by other teams and made creating new jobs for our team ,such less costly for developers.",
        ],
    },
    {
        company: "Infosys",
        title: "Software Developer",
        description: "string",
        achievements: [
            "Boeing has a large legacy application used to order important maintain documents for companies that buy their planes second hand. I worked with onshore application owners and stake holders to determine what work needed to be done to improve the application, how long it will take for our development team to complete these tasks, and which of these tasks are the highest priority. This way the application was cqninutally improving based on the buy in for everyone involved.",
            "Our development team was primarily in India. I lead the onshore team as well as held nightly meetings with the offshore team to explain the business requirements and get estimates for their work. I was also able answer of their questions and get updates on where the tasks were in their development. This way with teams remainder in synch and our deliverables were met. ",
            "At times customers or sales team members made minor mistakes that were not easily fixable through the application. I created small SQL scripts to fix these issues and tested them against non production databases to ensure their reliance. A direct Boeing employee then ran the scripts in the production database and quarried the same database to confirm they had run successfully. This allowed quick remediation of customer issues."
        ],
    },
    {
        company: "Revature",
        title: "Software Developer",
        description: "string",
        achievements: [
            "Revature is a paid bootcamp company that puts employees through a ten week bootcamp learning a particular technology stack before working with other companies to help them gain software development experience. I attended a bootcamp focused on Java J2EE technology stack. I was then contacted by Infosys and hired on full time as a Software Developer.",
            "Each week of our bootcamp was focused on a different technology. I attended the daily lessons and then at the end of the week I completed a test on the new subject, completed an activity or small project about this new technology, then had a mock interview with my bootcamp instructor. This helped prepare me for interview.",
            "At the end of the bootcamp, we were assigned to work on an application used by Revature recruiters to get questions for screening applicants. We broke into groups to work on different parts of this application I created the web page used by the people designing the questions for recruiters concerned around different technologies that their bootcamp would be focused on. This allowed them to design questionnaires that would give random questions to help screen potential candidates."
        ],
    }
]

export function getWorkHistories(): WorkHistory[] {
    return WorkHistories;
}