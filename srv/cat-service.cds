using my.company as my from '../db/data-model';

@impl: 'srv/company/company.js'
service Company {

    entity Users    as
        select from my.Users {
            *,
            false as authorized : Boolean
        };

    entity Roles    as projection on my.Roles;
    entity UserRole as projection on my.UserRole;
}
