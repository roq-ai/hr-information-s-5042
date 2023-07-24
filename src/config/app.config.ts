interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Employee', 'HR Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['notifications', 'file upload', 'chat', 'file'],
};
