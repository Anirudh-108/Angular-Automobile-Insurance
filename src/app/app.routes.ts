import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CustomerComponent } from './component/customer/customer.component';
import { FourthSectionComponent } from './component/landing-page/fourth-section/fourth-section.component';
import { FifthSectionComponent } from './component/landing-page/fifth-section/fifth-section.component';
import { PolicyComponent } from './component/policy/policy.component';
import { LoginMsgComponent } from './auth/signup-msg/signup-msg.component';
import { VehicleInfoFormComponent } from './component/policy/vehicle-info-form/vehicle-info-form.component';
import { ShowPolicyComponent } from './component/policy/show-policy/show-policy.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginMsg2Component } from './auth/login-msg-2/login-msg-2.component';
import { CustomerPolicyComponent } from './component/customer/customer-policy/customer-policy.component';
import { CustomerClaimComponent } from './component/customer/customer-claim/customer-claim.component';
import { CustomerRenewalComponent } from './component/customer/customer-renewal/customer-renewal.component';
import { BuyPolicyFormComponent } from './component/policy/buy-policy-form/buy-policy-form.component';
import { CustomerProfileComponent } from './component/customer/customer-profile/customer-profile.component';
import { MyPoliciesComponent } from './component/customer/my-policies/my-policies.component';
import { CustomerDocumentsComponent } from './component/customer/customer-documents/customer-documents.component';

export const routes: Routes = [
    {
        path:"",component:LandingPageComponent
    },
    {
        path:"login-msg",component:LoginMsg2Component
    },
    {
        path:"login",component:LoginComponent
    },
    {
        path:"signup",component:SignUpComponent
    },
    {
        path:"signup-msg",component:LoginMsgComponent
    },
    {
        path:"about",component:FourthSectionComponent
    },
    {
        path:"contact",component:FifthSectionComponent
    },
    {
        path:"customer",component:CustomerComponent,canActivate:[AuthGuard]
    },
    {
        path:"view-profile",component:CustomerProfileComponent,canActivate:[AuthGuard]
    },
    {
        path:"my-policies",component:MyPoliciesComponent,canActivate:[AuthGuard]
    },
    {
        path:"customer-policy",component:CustomerPolicyComponent,canActivate:[AuthGuard]
    },
    {
        path:"claim",component:CustomerClaimComponent,canActivate:[AuthGuard]
    },
    {
        path:"renew",component:CustomerRenewalComponent,canActivate:[AuthGuard]
    },
    {
        path:"policy",component:PolicyComponent
    },
    {
        path : "info/:vehicle" , component: VehicleInfoFormComponent,
    },
    {
        path:"showPolicy",component:ShowPolicyComponent
    },
    {
        path:"upload-documents",component:CustomerDocumentsComponent
    },
    {
        path:"buy-policy-form",component:BuyPolicyFormComponent
    },
    
    










    {
        path:"logout",component:LogoutComponent
    },
    {
        path:"**",component:PageNotFoundComponent
    }




   // {
    //     path:"admin/admin-dashboard",component:AdminDashboardComponent
    // },
];
