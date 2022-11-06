Section 1: Selling CI/CD to your Team/Organization

File path in the repository home:
~/presentation.pdf



-------------------------------------------------------------------




Section 2: Deploying Working, Trustworthy Software


A.
Utilize Deployment Strategies to design and build CI/CD pipelines that support Continuous Delivery processes.


A public git repository with your project code. [URL01]


Console output of various pre-deploy job failure scenarios:

Build Jobs that failed because of compile errors. [SCREENSHOT01]
Failed unit tests. [SCREENSHOT02]
Failure because of vulnerable packages. [SCREENSHOT03]
An alert from one of your failed builds. [SCREENSHOT04]


Evidence in your code that:

Compile errors have been fixed.
Unit tests have been fixed.
All critical security vulnerabilities caught by the “Analyze” job have been fixed.












B.
Utilize a configuration management tool to accomplish deployment to cloud-based servers.






Console output of appropriate failure for infrastructure creation job (using CloudFormation). [SCREENSHOT05]

Console output of a smoke test job that is failing appropriately. [SCREENSHOT06]

Console output of a successful rollback after a failed smoke test. [SCREENSHOT07]

Console output of successful promotion of new version to production in CloudFront. [SCREENSHOT08]

Console output of successful cleanup job that removes old S3 bucket and EC2 instance. [SCREENSHOT09]

Evidence that deploy jobs only happen on master branch. [SCREENSHOT10]

Evidence of deployed and functioning front-end application in an S3 bucket [URL02] and in CloudFront. [URL03]

Evidence of healthy back-end application. [URL04]







-------------------------------------------------------------------



Section 3: Turn Errors into Sirens



Surface critical server errors for diagnosis using centralized logging.

Evidence of Prometheus Server. [URL05]

Evidence that Prometheus is monitoring memory, cpu and disk usage of EC2 instances. [SCREENSHOT11]

Evidence that Prometheus and AlertManager send alerts when certain conditions exist in the EC2 instance. [SCREENSHOT12]






-------------------------------------------------------------------





Suggestions to Make Your Project Stand Out!

1. Add custom alert messages with more specific CI/CD pipeline failure reasons. The more specific the message, the faster the UdaPeople dev team can fix the issue.

2. Use Circle CI locally to test your pipeline before pushing to git.

3. Integrate other types of analysis or notification jobs.

4. Write your own smoke tests to build more confidence before promoting the new build to production.





