namespace my.company;

using {managed} from '@sap/cds/common';


entity Users : managed {
  key ID        : UUID;
      firstname : String;
      lastname  : String;
      email     : String;
      roles     : Composition of many Roles
                    on roles.users = $self
}


entity Roles : managed {
  key ID          : UUID;
      name        : String;
      description : String;
      users       : Association to Users
}
