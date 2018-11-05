import cdk = require('@aws-cdk/cdk');
import { Group, Policy, User } from '../lib';

export class ExampleConstruct extends cdk.Construct {
  constructor(parent: cdk.Construct, id: string) {
    super(parent, id);

    /// !show
    const user = new User(this, 'MyUser', { password: '1234' });
    const group = new Group(this, 'MyGroup');

    const policy = new Policy(this, 'MyPolicy');
    policy.attachToUser(user);
    group.attachInlinePolicy(policy);
    /// !hide
  }
}