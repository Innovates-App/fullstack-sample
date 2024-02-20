namespace my.company;

using {managed} from '@sap/cds/common';


entity Users : managed {
  key ID        : UUID;
      firstname : String;
      lastname  : String;
      email     : String;
      roles     : Composition of many UserRole
                    on roles.user = $self
}


entity Roles : managed {
  key ID          : UUID;
      name        : String;
      description : String;
      users       : Composition of many UserRole
                      on users.role = $self
}

entity UserRole {
  key user : Association to Users;
  key role : Association to Roles
}
