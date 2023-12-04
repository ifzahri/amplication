import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const ChannelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="Members.id" reference="User" label="Members">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Messages" multiline source="messages" />
      </SimpleForm>
    </Create>
  );
};
