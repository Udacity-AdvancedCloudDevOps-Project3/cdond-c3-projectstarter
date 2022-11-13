>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
????????????????????????????????????????????????????




Change Circleci aws acces credentials for profile 3

double check that pipeline runs using profile 3

Database parameters 





We may add hint about what was created manually 

VPC
SLACK integration
AWS programatic user
RDS Database and we allwed traffic on port 5432 from anywhere not our local IP
S3
initial cloudfront stack
circleci env various
circleci SSH key
kvdb.io




reverse the time of SSH connection to 600 sec again





Update this parametert
"
Evidence of deployed and functioning front-end application in an S3 bucket [URL02] and in CloudFront. [URL03]
"





remove any comments for 

destroy-environment



Check if we remove all comments from all files after all is Working






<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
??????????????????????????????????????????????????




Section 1: Selling CI/CD to your Team/Organization

    File path in the repository home:

    ~/presentation.pdf



-------------------------------------------------------------------




Section 2: Deploying Working, Trustworthy Software


A.
Utilize Deployment Strategies to design and build CI/CD pipelines that support Continuous Delivery processes.

A.1.
A public git repository with your project code. [URL01]


    URL01 is:
    
    https://github.com/Udacity-AdvancedCloudDevOps-Project3/cdond-c3-projectstarter.git




A.2.
Evidence of code-based CI/CD configuration in the form of yaml files in your git repository.

    Circleci CI/CD pipeline configuration file path in the repository home:

    ~/.circleci/config.yml



A.3.
Console output of various pre-deploy job failure scenarios:

A.3.a
Build Jobs that failed because of compile errors. [SCREENSHOT01]
    
    Screenshot path in the repository home:
    ~/README-zakarya/SCREENSHOT01.png

A.3.b
Failed unit tests. [SCREENSHOT02]

    Screenshot for failed Unit test of frontend in the path of the repository home:
    ~/README-zakarya/SCREENSHOT02.a.png

    Screenshot for failed Unit test of backend in the path of the repository home:
    ~/README-zakarya/SCREENSHOT02.b.png

A.3.c
Failure because of vulnerable packages. [SCREENSHOT03]

    Screenshot for failed Analyze audit security test of frontend in the path of the repository home:
    ~/README-zakarya/SCREENSHOT03.a.png

    Screenshot for failed Analyze audit security test of backend in the path of the repository home:
    ~/README-zakarya/SCREENSHOT03.b.png

A.3.d
An alert from one of your failed builds. [SCREENSHOT04]

    Screenshot from Salack for failed Analyze audit security test of backend in the path of the repository home:
    ~/README-zakarya/SCREENSHOT04.a.png

    Screenshot from Salack for successful jobs in the path of the repository home:
    ~/README-zakarya/SCREENSHOT04.b.png

    Screenshot from Circleci for failed Analyze audit security test of backend in the path of the repository home:
    ~/README-zakarya/SCREENSHOT04.c.png

    Screenshot from Circleci event "pass" does not sent notification to Slack for failed Analyze audit security test of backend in the path of the repository home:
    ~/README-zakarya/SCREENSHOT04.d.png

    Screenshot from Circleci event "fail" sent notification to Slack for failed Analyze audit security test of backend in the path of the repository home:
    ~/README-zakarya/SCREENSHOT04.e.png







A.4
Evidence in your code that:

A.4.a
Compile errors have been fixed.

    I added comments in the code of the file in path of the repository home:
    ~/backend/src/main.ts
    In lines 31 & 32
    "
    ...
        //zak-original-not-commented// .addBearerAuth()x // here is an intentional compile error. Remove the "x" and the backend should compile.
        .addBearerAuth() // This line change fixed the problem.
    ...
    "

A.4.b
Unit tests have been fixed.

    To fix frontend unit test
    I added comments in the code of the file in path of the repository home:
    ~/frontend/src/app/components/LoadingMessage/LoadingMessage.spec.tsx
    In lines 11:13
    "
    ...
    // zak-original-line-not-commented
    // expect(wrapper.contains(<span>{message}?</span>)).toBeTruthy(); //remove the question mark to make the test pass
    expect(wrapper.contains(<span>{message}</span>)).toBeTruthy(); // Removing the "?" question mark fixed frontend unit test
    ...
    "


    To fix backend unit test
    I added comments in the code of the file in path of the repository home:
    ~/backend/src/modules/domain/employees/commands/handlers/employee-activator.handler.spec.ts
    Lines 22& 23
    "
    ...
    //zak-original-line-not-commented //employeeId: 101, //change this to 100 to make the test pass
        employeeId: 100, //change value to 100 fixed backend unit test
    ...
    "


????????????????????????????????????????????
Chck code lines before submitting the project
????????????????????????????????????????????
A.4.c
All critical security vulnerabilities caught by the “Analyze” job have been fixed.

   To fix frontend Analyze audit security test
    I added comments in the code of the file in path of the repository home:
    ~/.circleci/config.yml
    Lines 157 & 161
    "
    ...
    ### to fix frontend Analyze audit security test We add next line
    sudo npm install npm@latest -g
    npm audit fix --audit-level=critical --force
    # npm audit fix --audit-level=critical --force
    # npm audit fix --force
    npm audit --audit-level=critical
    ...
    "


    To fix backend Analyze audit security test
    I added comments in the code of the file in path of the repository home:
    ~/.circleci/config.yml
    Lines 184 & 189
    "
    ...
    ### to fix backend nalyze audit security test We add next line
    npm install
    npm audit fix --audit-level=critical --force
    npm audit fix --audit-level=critical --force
    # npm audit fix --audit-level=critical --force
    # npm audit fix --force
    npm audit --audit-level=critical
    ...
    "

    Also for backend fix
    I made changes in the code of the file in path of the repository home:
    ~/backend/package.json
    
    Lines 47
    FROM
    "class-validator": "^0.9.1",
    TO
    "class-validator": "^0.12.2",
    "
    
    Also lines 80
    FROM
    "standard-version": "^4.4.0",
    TO
    "standard-version": "^7.0.0",
    








B.
Utilize a configuration management tool to accomplish deployment to cloud-based servers.

B.1
Console output of appropriate failure for infrastructure creation job (using CloudFormation). [SCREENSHOT05]

    Screenshot path in the repository home:
    ~/README-zakarya/SCREENSHOT05.png

B.2
Console output of a smoke test job that is failing appropriately. [SCREENSHOT06]

B.3
Console output of a successful rollback after a failed smoke test. [SCREENSHOT07]

B.4
Console output of successful promotion of new version to production in CloudFront. [SCREENSHOT08]

B.5
Console output of successful cleanup job that removes old S3 bucket and EC2 instance. [SCREENSHOT09]

B.6
Evidence that deploy jobs only happen on master branch. [SCREENSHOT10]

B.7
Evidence of deployed and functioning front-end application in an S3 bucket [URL02] and in CloudFront. [URL03]

B.8
Evidence of healthy back-end application. [URL04]







-------------------------------------------------------------------



Section 3: Turn Errors into Sirens


A.
Surface critical server errors for diagnosis using centralized logging.

A.1
Evidence of Prometheus Server. [URL05]

A.2
Evidence that Prometheus is monitoring memory, cpu and disk usage of EC2 instances. [SCREENSHOT11]

A.3
Evidence that Prometheus and AlertManager send alerts when certain conditions exist in the EC2 instance. [SCREENSHOT12]






-------------------------------------------------------------------





Suggestions to Make Your Project Stand Out!

1. Add custom alert messages with more specific CI/CD pipeline failure reasons. The more specific the message, the faster the UdaPeople dev team can fix the issue.

2. Use Circle CI locally to test your pipeline before pushing to git.

3. Integrate other types of analysis or notification jobs.

4. Write your own smoke tests to build more confidence before promoting the new build to production.





