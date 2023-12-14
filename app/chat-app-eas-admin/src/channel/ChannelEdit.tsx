import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const ChannelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="Members.id" reference="User" label="Members">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Messages" multiline source="messages" />
      </SimpleForm>
    </Edit>
  );
};
