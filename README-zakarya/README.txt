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

A.3.c
Failure because of vulnerable packages. [SCREENSHOT03]

A.3.d
An alert from one of your failed builds. [SCREENSHOT04]





A.4
Evidence in your code that:

A.4.a
Compile errors have been fixed.

    >I added a comment in the code of the file
    "
    ...
        //zak-original-not-commented// .addBearerAuth()x // here is an intentional compile error. Remove the "x" and the backend should compile.
        .addBearerAuth() // This line change fixed the problem.
    ...
    "

A.4.b
Unit tests have been fixed.

A.4.c
All critical security vulnerabilities caught by the “Analyze” job have been fixed.












B.
Utilize a configuration management tool to accomplish deployment to cloud-based servers.

B.1
Console output of appropriate failure for infrastructure creation job (using CloudFormation). [SCREENSHOT05]

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





