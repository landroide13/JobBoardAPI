const mongoose = require('mongoose');

const jobBoard = 'jobBoard';

const Job = require('./models/Job');

mongoose.connect(`mongodb://localhost:27017/${jobBoard}`)
        .then(() => {
            console.log("Connection Open")
        })
        .catch(err => console.log(err))


const jobs = [
    {
        employer_name:"Dice",
        employer_logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
        job_employment_type:"CONTRACTOR",
        job_title:"Web Developer - 6-month Contract - Houston Hybrid",
        job_apply_link:"https://www.linkedin.com/jobs/view/web-developer-6-month-contract-houston-hybrid-at-dice-3624857671",
        job_description:"An established energy client of mine is looking for an experienced Web Developer to join their team on an initial 6-month contract. Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors. This role is hybrid and you will be required to go in to the office 3 days p/w. Full-Stack Web Developer 6-month contract (likely extension) Houston - Hybrid working W2 - $70 - $75 p/h C2C - $80 - $90 p/h Starting 06/05 Technical requirements; JavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API (NO EMPLOYERS OR RECRUTIERS) Oscar Associates Limited (US) is acting as an Employment Business in relation to this vacancy. Web Developer - 6-month Contract - Houston Hybrid",
        job_is_remote:true,
        job_city:"Houston",
        job_country:"US",
        job_latitude:29.760427,
        job_longitude:-95.369804,
        Qualifications: ["JavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API"],
        Responsibilities:[ "Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors"
        ,"This role is hybrid and you will be required to go in to the office 3 days p/w"]
    },
    {
        employer_name:"Charles Schwab",
        employer_logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/1200px-Charles_Schwab_Corporation_logo.svg.png",
        job_employment_type:"Full-Time",
        job_title:"Web Developer Houston Hybrid",
        job_apply_link:"https://www.schwabjobs.com/job/austin/software-web-developer/33727/48110146896",
        job_description:"Your Opportunity We help our clients plan for their future and they are passionate about the tools and experiences we provide. We collaborate with user experience and design, business and technology partners across the enterprise to build software experiences our users’ are passionate about. What you are good at Website and Electronic Communications (Email, Push, SMS, etc) Templates designing, building, or maintaining. Using scripting or authoring languages, management tools, content creation tools, applications and digital media. Conferring with teams in resolving conflicts, prioritizing needs, developing content criteria, or choosing solutions. Directing or performing Website/Electronic Communications updates. Developing or validating test routines and schedules in ensuring that test cases mimic external interfaces and address all browser and device types. Editing, writing, or designing Website content, and directing team members who produce content. Maintaining an understanding of the latest Web applications and programming practices through education, studying, and participating in conferences, workshops, and groups. Identifying problems uncovered by customer feedback and testing and correcting or referring problems to appropriate personnel for correction. Evaluating code in ensuring that it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems; and Determining user needs by analyzing technical requirements. What you have Job Requirements: Bachelor’s degree or foreign degree equivalent in Computer Science, Engineering or related field and five (5) years of experience in the job offered or related role. Skills: Experience and/or education must include: Experience in programming applications using HTML, JavaScript, CSS, Angular/React Js, XML and Json.; SQL/No-SQL databases; Experience working with the continuous integration and continuous deployment (CI/CD) pipelines; Experience in programming applications using Java/J2EE; Understanding of software quality assurance principles; Experience working in Agile teams. Charles Schwab & Company, Inc. seeks Software Web Developer in Austin, TX.",
        job_is_remote: false,
        job_city:"Houston",
        job_country:"US",
        job_latitude: 30.267153,
        job_longitude:-97.74306,
        Qualifications: ["Job Requirements: Bachelor’s degree or foreign degree equivalent in Computer Science, Engineering or related field and five (5) years of experience in the job offered or related role",
        "Skills: Experience and/or education must include: Experience in programming applications using HTML, JavaScript, CSS, Angular/React Js, XML and Json.; SQL/No-SQL databases; Experience working with the continuous integration and continuous deployment (CI/CD) pipelines; Experience in programming applications using Java/J2EE; Understanding of software quality assurance principles; Experience working in Agile teams"],
        Responsibilities:[ "Directing or performing Website/Electronic Communications updates"
        ,"Developing or validating test routines and schedules in ensuring that test cases mimic external interfaces and address all browser and device types"
        ,"Editing, writing, or designing Website content, and directing team members who produce content"
        ,"Maintaining an understanding of the latest Web applications and programming practices through education, studying, and participating in conferences, workshops, and groups"
        ,"Identifying problems uncovered by customer feedback and testing and correcting or referring problems to appropriate personnel for correction"
        ,"Evaluating code in ensuring that it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems; and Determining user needs by analyzing technical requirements"]
    },
    {
        employer_name:"Crescens",
        employer_logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i49TxmypL921gwSrXCigLk762K1u2Qu9yW0x&s=0",
        job_employment_type:"Part-Time",
        job_title:"Web Developer",
        job_apply_link:"https://www.recruit.net/job/web-developer-jobs/A8362DD6B42FD034",
        job_description:"Job Description Job title : Web Developer Location : Remote Duration : 5 months Type: contract Job Description -> Minimum of 7 years overall IT experience: including 5 years of web UI development and integration experience Responsible for detailed UI design, development/unit testing and integration of web and applications Responsible for Angular application development using web app development tools and frameworks Produce scalable and flexible, high-quality code",
        job_is_remote:true,
        job_city:"Texas City",
        job_country:"US",
        job_latitude: 29.383844,
        job_longitude:-94.9027,
        Qualifications: "Java, Vue, HTML, CSSS, API",
        Responsibilities:[ "Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors"
        ,"This role is hybrid and you will be required to go in to the office 3 days p/w"]
    },
    {
        employer_name:"DicConnecttel, Ince",
        employer_logo:"https://logoimagesv2.id-visitors.com/0/b/5/4/4/f/0b544fc53a4c40dfa112c91442f219d6.png",
        job_employment_type:"CONTRACTOR",
        job_title:"Front-End Developer (JavaScript, HTML, CSS)",
        job_apply_link:"https://www.dice.com/job-detail/35181ab6-1420-4e02-896c-2c506f1cb5e2",
        job_description:"Front-End Developer Austin, TX (Relocation and immigration visa sponsorship is not currently available.) Full time Are you an amazing developer ready to work in a collaborative team? Do you want to have your voice heard in a small but stable and profitable company? Do you enjoy thinking creatively and constantly learning? Most importantly, are you a dog lover? Then you might be just who we're looking for! Hiring developers to help us create new and exciting web-based user interfaces. What you'll be doing: Engineering lightweight UI components that scale well over time and meet modern web standards Transforming wireframes from conception to reality while collaborating with a team Building software used by some of the largest financial institutions in the world Continually improving our UI code base by contributing to code reviews and routine maintenance You: Have a bachelor's degree in computer science or a related field Love working in visual mediums and UI/UX Have experience with object-oriented programming Are a self-starter who takes initiative and helps drive the product design Feel comfortable working in a non-structured, agile development environment with short release cycles Are interested in financial technology Must love dogs Optional but helpful skills: 3 years of experience Familiarity with JavaScript, HTML, CSS Familiarity with any JavaScript Framework Familiarity with a version control system Experience interacting with a web service API Experience with website design What we offer: A highly competitive salary Company-paid family health, vision, and dental insurance 401K with employer matching A fun and relaxed environment in a small but profitable and stable company Opportunity to learn about the financial services industry in the US, UK, Ireland, Canada, Europe and Asia Opportunity for international travel if desired",
        job_is_remote:true,
        job_city:"Austin",
        job_country:"US",
        job_latitude:30.267153,
        job_longitude:-97.74306,
        Qualifications: ["You: Have a bachelor's degree in computer science or a related field"
        ,"Love working in visual mediums and UI/UX"
        ,"Have experience with object-oriented programming"
        ,"Are a self-starter who takes initiative and helps drive the product design"
        ,"Feel comfortable working in a non-structured, agile development environment with short release cycles"
        ,"Are interested in financial technology"
        ,"3 years of experience"
        ,"Familiarity with JavaScript, HTML, CSS"
        ,"Familiarity with any JavaScript Framework"
        ,"Familiarity with a version control system"
        ,"Experience interacting with a web service API"
        ,"Experience with website design"],
        Responsibilities:[ "Engineering lightweight UI components that scale well over time and meet modern web standards"
        ,"Transforming wireframes from conception to reality while collaborating with a team"
        ,"Building software used by some of the largest financial institutions in the world"
        ,"Continually improving our UI code base by contributing to code reviews and routine maintenance"]
    },
    {
        employer_name:"Spurs Sports & Entertainment",
        employer_logo:"https://firstteeaustin.org/wp-content/uploads/sites/64/2016/11/spurs-sports-and-entertainment-LOGO.jpg",
        job_employment_type:"Full-Time",
        job_title:"Senior Web Developer",
        job_apply_link:"https://www.linkedin.com/jobs/view/senior-web-developer-at-spurs-sports-entertainment-3617222882",
        job_description:"Overview We are looking for Senior Web Developer to join our family! At Spurs Sports & Entertainment (SS&E), we work in service of something bigger than ourselves, it’s so much more than the game or concert itself. It takes all members of our Spurs Family to harness the power of sports and entertainment to build moments that endure, memories that excite, and connections that strengthen our community. This position will support and manage both app and website development across the Spurs Sports & Entertainment portfolio. You will develop user-focused products, develop meaningful metrics and tracking them over time to establish a program of continuous innovation and improvement.",
        job_is_remote: false,
        job_city:"San Antonio",
        job_country:"US",
        job_latitude:29.42519,
        job_longitude:-98.49459,
        Qualifications: ["This position focuses on front end web and mobile app development and requires coding/programming skills necessary to build and solve assets both from scratch and from within multiple CMS environments"
        ,"2-4 years’ experience developing responsive, web-based applications"
        ,"2+ years’ experience using version control - Git, GitHub, etc"
        ,"Experience with front-end development languages and markups (JavaScript, CSS, HTML, etc.)"
        ,"Experience with UI CSS and/or JavaScript frameworks (Bootstrap, Materialize, Vue.JS, React, jQuery, etc.)"
        ,"Familiarity and knowledge of API, JSON, XML, and other common data frameworks"
        ,"Experience working in content management systems"
        ,"Ability to creatively problem solve, work independently and coordinate multiple tasks"
        ,"Strong teamwork and interpersonal skills to handle acute and confidential situations and information"],
        Responsibilities:["This position will support and manage both app and website development across the Spurs Sports & Entertainment portfolio"
        ,"You will develop user-focused products, develop meaningful metrics and tracking them over time to establish a program of continuous innovation and improvement"
        ,"In addition to the above, this position will also be responsible for the development and maintenance of all websites in SS&E’s portfolio"
        ,"Write clean, reusable, and accessible client-side component code for web applications"
        ,"Understand product requirement documentation/functional specifications and develop application based upon specifications"
        ,"Collaborate with project partners to ensure all requirements are met"
        ,"Interact regularly with users to capture feedback, listen to their issues and concerns, recommend solutions"
        ,"Apply knowledge of modern web development to build and maintain responsive web pages"
        ,"Be responsible for quality assurance testing for all digital platforms"
        ,"Provide technical and developmental mentorship to junior developers"
        ,"Other duties as assigned"]
    },
    {
        employer_name:"Archetype Permanent Solutions",
        employer_logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
        job_employment_type:"Full-Time",
        job_title:"Web Developer - 6-month Contract - Houston Hybrid",
        job_apply_link:"https://www.talent.com/view?id=d9389c3c7cd3",
        job_description:"• Develop and maintain web applications using modern web technologies and programming languages • Work with cross-functional teams to understand business requirements and develop appropriate solutions • Write well-designed, testable, and efficient code using appropriate software development methodologies • Develop and maintain database schemas, queries, and stored procedures in SQL databases • Work with PLC logic and interface with web applications • Collaborate with front-end developers to integrate user-facing elements with server-side logic • Ensure the technical feasibility of UI / UX designs • Optimize web applications for maximum speed and scalability • Troubleshoot and debug web applications as necessary • Stay up-to-date with emerging trends and technologies in web development Requirements : • Bachelor's degree in Computer Science, Information Technology or related field • Proven experience in full stack web development with a focus on server-side technologies • Strong experience with Windows Server, SQL databases, and PLC logic • Proficient understanding of web markup, including HTML5, CSS3, and JavaScript frameworks (e.g. AngularJS, ReactJS) • Experience with web development frameworks such as ASP.NET , Node.js, Ruby on Rails, or Django • Knowledge of at least one server-side programming language such as C#, Java, or Python • Experience with version control systems such as Git • Strong analytical and problem-solving skills • Excellent communication and collaboration skills • Ability to work independently as well as in a team-oriented environment • Bilingual English and Korean If you are an experienced Full Stack Web Developer with a passion for developing cutting-edge web applications and a desire to work with a dynamic team, please apply for this position. We offer a competitive salary, benefits package, and opportunities for professional growth and advancement. Powered by JazzHR Last updated : 2023-06-01",
        job_is_remote:false,
        job_city:"Austin",
        job_country:"US",
        job_latitude:30.267153,
        job_longitude:-97.74306,
        Qualifications: ["Bachelor's degree in Computer Science, Information Technology or related field"
        ,"Proven experience in full stack web development with a focus on server-side technologies"
        ,"Strong experience with Windows Server, SQL databases, and PLC logic"
        ,"Proficient understanding of web markup, including HTML5, CSS3, and JavaScript frameworks (e.g"
        ,"AngularJS, ReactJS)"
        ,"Experience with web development frameworks such as ASP"
        ,"NET , Node.js, Ruby on Rails, or Django"
        ,"Knowledge of at least one server-side programming language such as C#, Java, or Python"
        ,"Experience with version control systems such as Git"
        ,"Strong analytical and problem-solving skills"
        ,"Excellent communication and collaboration skills"
        ,"Ability to work independently as well as in a team-oriented environment"
        ,"Bilingual English and Korean"],
        Responsibilities:["Develop and maintain web applications using modern web technologies and programming languages"
        ,"Work with cross-functional teams to understand business requirements and develop appropriate solutions"
        ,"Write well-designed, testable, and efficient code using appropriate software development methodologies"
        ,"Develop and maintain database schemas, queries, and stored procedures in SQL databases"
        ,"Work with PLC logic and interface with web applications"
        ,"Collaborate with front-end developers to integrate user-facing elements with server-side logic"
        ,"Ensure the technical feasibility of UI / UX designs"
        ,"Optimize web applications for maximum speed and scalability"
        ,"Troubleshoot and debug web applications as necessary"
        ,"Stay up-to-date with emerging trends and technologies in web development"]
    },
    {
        employer_name:"PCS Software",
        employer_logo: null,
        job_employment_type:"CONTRACTO",
        job_title: "Senior React Front-End Web Developer",
        job_apply_link:"https://www.learn4good.com/jobs/sugar-land/texas/software_development/2355985733/e/",
        job_description:"Senior React Front-End Web Developer Targeted Start Date: ASAP Location: on site in the PCS Houston Regional Office (this is not a remote role, but has a flexible work schedule) Immediate Supervisor: Director of Development Company Background PCS Software, Inc. is an AI platform for the transportation logistics market space providing the trucking industry's most effective transportation management platform (TMP) to improve fleet management and delivery systems and increase profits for our customers. Through innovation and invention, our software individualizes work routines, consolidates workflows, and streamlines management controls to improve accountability, transparency, and eliminate costly and redundant manual processes. Trucking companies and freight brokers trust PCS to optimize their dispatch, accounting, and fleet operations. TL, LTL, Intermodal, and freight brokerage services use our TMP to automate operations, easily access information, and reduce inefficiencies to maximize sales and revenue. Founded in 1997 and headquartered in Houston, Texas, with regional offices now located across North America, PCS Software is the leading developer of hosted software solutions designed specifically for the ground transportation industry. Job Description: Senior React Front-End Web Developer Role and Responsibilities Technical resource responsible for front-end development using web technologies which include, but are not limited to: HTML, CSS, JavaScript, and React/Redux. Building reusable components and front-end libraries for future use Responsible for translating designs and wireframes into high quality code Optimizing components for maximum performance across a vast array of web-capable devices and browse Ensure technical feasibility of UI/UX designs Champion requirement evaluation and impact analysis Participate in code reviews and share best practices periodically Continuous integration with Jenkins",
        job_is_remote: false,
        job_city:"Sugar Land",
        job_country:"US",
        job_latitude:29.598444,
        job_longitude:-95.62255,
        Qualifications: ["3+ years of experience developing and deploying large-scale websites and website content or demonstrated skill level in previous positions"
        ,"3+ years of experience Design and developing application in JavaScript technologies"
        ,"Proven understanding of design patterns, reference architectures, industry standards, broad technical knowledge, and architectural principles is necessary"
        ,"Demonstrated ability to provide and recommend innovative ideas with the skill to align projects with enterprise strategy is needed"
        ,"Ability to work efficiently and accurately under pressure, meet deadlines, present a professional demeanor, and work well independently is essential"
        ,"Ability to estimate financial impact of technical architecture alternatives and apply multiple technical solutions to business problems is vital"
        ,"Technical Knowledge and Skills Required Experience building responsive websites using React"
        ,"Experience in client-side scripting, libraries, and structures which include HTML5, CSS3, JavaScript, XML, and JSON"
        ,"Understanding of Content Stack and Content Stack integration with React"
        ,"Thorough understanding of React"
        ,"Js and its core principles"
        ,"Experience with popular React.js workflows (such as Flux or Redux)"
        ,"Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model"
        ,"Experience with common front-end development tools such as Babel, Webpack, NPM, etc"
        ,"Experience writing unit tests for Java Script"
        ,"Experience with Responsive Web Design"
        ,"Knowledge of modern authorization mechanisms, such as JSON Web Token"
        ,"Familiarity with modern front-end build pipelines and tools"
        ,"Ability to understand business requirements and translate them into technical requirements"],
        Responsibilities:[ "Trucking companies and freight brokers trust PCS to optimize their dispatch, accounting, and fleet operations"
        ,"Responsibilities Technical resource responsible for front-end development using web technologies which include, but are not limited to: HTML, CSS, JavaScript, and React/Redux"
        ,"Building reusable components and front-end libraries for future use"
        ,"Responsible for translating designs and wireframes into high quality code"
        ,"Optimizing components for maximum performance across a vast array of web-capable devices and browse"
        ,"Ensure technical feasibility of UI/UX designs"
        ,"Champion requirement evaluation and impact analysis"
        ,"Participate in code reviews and share best practices periodically"
        ,"Continuous integration with Jenkins CI"
        ,"Participate in full SDLC, including meetings, interactive development, estimations, and design sessions"
        ,"Work in a collaborative environment with other developers and QA team members, product designers, product managers, and off-site 3rd party vendor team members"
        ,"Deliver code solutions built for performance, availability, and scalability optimizing applications for maximum speed and scalability"
        ,"Code and unit test functionality and/or integrations between systems"
        ,"Support and troubleshoot issues (process and system), identify the root cause, and proactively implement sustainable corrective actions"
        ,"Stay current with the fast-changing landscape of browser-based application development"
        ,"Monitor the development of, evaluate, and recommend new technologies/approaches to the development pipeline"
        ,"Mentor other developers (and interns occasionally) to increase the overall skill level of the team and quality of team output"
        ,"Review code produced by other developers for acceptance into the repository"
        ,"Develop a thorough understanding of policies, procedures, and safety rules"
        ,"Team Members may be required to perform other duties as assigned"]
    },
    {
        employer_name:"NextAfter",
        employer_logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LtpFk_Qn5msyHfLis8HxKBBhhxla_ZNtS7bV&s=0",
        job_employment_type:"Full-Time",
        job_title:"Front End Web Developer",
        job_apply_link:"https://www.linkedin.com/jobs/view/front-end-web-developer-at-nextafter-3621796979",
        job_description:"At NextAfter, web developers are critical in allowing our nonprofit clients to escape the shackles of poorly designed software. Out-of-the-box software solutions rarely allow nonprofits the flexibility necessary to track every donor action or to make design tweaks to improve donor conversion. That is where you come in. In this role, you will be charged with helping organizations make websites do things they were never designed to do. You’ll apply your HTML, Javascript, and CSS skills toward crafting unique solutions to solve complex problems across a variety of different web platforms. Because NextAfter works solely with nonprofits to help them raise money and awareness for their causes, it’s also essential that every member on our team.",
        job_is_remote: false,
        job_city:"Plano",
        job_country:"US",
        job_latitude:33.019844,
        job_longitude:-96.69888,
        Qualifications: ["Advanced knowledge of Javascript (ability to code without relying on outside libraries such as Vue.js, jQuery, React.js, etc.)"
        ,"Experience with HTML and CSS to craft web pages"
        ,"Knowledge of marketing platforms such as Hubspot, MailChimp, and Pardot"
        ,"Experience implementing digital analytics platforms such as Google Analytics and Facebook"
        ,"Knowledge of A/B testing and the associated platforms such as VWO"
        ,"Bachelor’s degree (or comparable experience in a similar role)"
        ,"Training in web development either from a Bachelor’s degree or coding bootcamp"],
        Responsibilities:[ "In this role, you will be charged with helping organizations make websites do things they were never designed to do"
        ,"You’ll apply your HTML, Javascript, and CSS skills toward crafting unique solutions to solve complex problems across a variety of different web platforms"
        ,"Setting up A/B experiments utilizing VWO, Optimizely, and similiar platforms"
        ,"This will involve writing Javascript, HTML, and CSS to override existing page layout and design"
        ,"Implementing enhanced tracking to monitor the fundraising and marketing efforts"
        ,"This is normally done with platforms such as Google Tag Manager, Google Analytics, Facebook, Google Ads, and other advertising platforms"
        ,"Configuring marketing software such as Mailchimp, Hubspot, and similar tools to serve the needs of the nonprofit clients that we work with"
        ,"This involves setting up templates, implementing tracking, and making configuration changes based upon requirements"
        ,"Working with client service specialists to devise strategies and tactics that improve our clients’ performance"]
    }

]


Job.insertMany(jobs).then(res =>  console.log(res))





