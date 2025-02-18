import { EmployeeRepository } from '../../repositories/employees.repository';
import { ActivateEmployee } from '../activate-employee.command';
import { EmployeeActivator } from './employee-activator.handler';

describe('Employee Remover', () => {
  describe('when a user activates an employee', () => {
    const MockEmployeeRepository = jest.fn<EmployeeRepository, []>(
      () =>
        ({
          findById: jest.fn().mockResolvedValue([]),
          save: jest.fn(),
        } as any),
    );

    const employeeRepository = new MockEmployeeRepository();

    it('should activate the employee from the repository', async () => {
      // Arrange
      const handler = new EmployeeActivator(employeeRepository);

      const params = {
        //zak-original-line-not-commented //employeeId: 101, //change this to 100 to make the test pass
        employeeId: 100, //change value to 100 fixed backend unit test
        isActive: false,
      };

      const activateEmployeeCommand = new ActivateEmployee(
        params.employeeId,
        params.isActive,
      );

      // Act
      await handler.handle(activateEmployeeCommand);

      // Assert
      expect(employeeRepository.findById).toBeCalledWith(100);
      expect(employeeRepository.save).toBeCalled();
    });
  });
});
