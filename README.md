# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`fulltackproject-ui/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide

## Prerequisite

You need to create a destination on your SAP BTP Cockpit Subaccount to reach CAP services.
In this example, the destination name is FULLSTACK_SERVICES.

You may also need to adapt **xs-app.json** and **ui5-local.yaml** files. 


## Next Steps

- Install dependecies: `npm i` on root and UI folder
- Login to CF: `cf login`
- Build and deploy db: `cds build` and `cds deploy --to hana` on root folder
- Build and deploy to CF: `mbt build` and `cf deploy mta_archives/fullstackproject_1.0.0.mtar` on root folder
- Check if service keys exist for db and auth service: ``
- Create service keys if necessary: `cf create-service-key SERVICE_INSTANCE_NAME SERVICE_INSTANCE_KEY`
- Service binding: `cds bind -2 SERVICE_INSTANCE_NAME:SERVICE_INSTANCE_KEY`
- Start services: `cds watch --profile hybrid` 
- Start UI: open a new terminal, move to UI folder and run `npm run start-local`