import { UserService } from "../../features/users/services/userService";
import type { User } from "../../features/users/types/user";
import { userFormSchema } from "../../utils/formSchemas";
import { FormRenderer } from "./FormRenderer";

export const UserForm = ({ userId }: { userId?: string }) => {
  const handleSubmit = async (data: User) => {
    if (userId) {
      await UserService.update(userId, data);
    } else {
      await UserService.create(data);
    }
  };

  return <FormRenderer schema={userFormSchema} onSubmit={handleSubmit} />;
};
