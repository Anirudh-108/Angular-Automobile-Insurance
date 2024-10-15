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
import { EditProfileComponent } from './component/customer/edit-profile/edit-profile.component';
import { BuyMsgComponent } from './component/policy/buy-policy-form/buy-msg/buy-msg.component';
import { PolicyInfoComponent } from './component/customer/policy-info/policy-info.component';
import { CustomerComplainComponent } from './component/customer/customer-complain/customer-complain.component';
import { ComplainFormComponent } from './component/customer/customer-complain/complain-form/complain-form.component';
import { ComplainOptionsComponent } from './component/customer/customer-complain/complain-options/complain-options.component';
import { AllComplainsComponent } from './component/customer/customer-complain/all-complains/all-complains.component';
import { AllClaimsComponent } from './component/customer/customer-claim/all-claims/all-claims.component';
import { RenewPolicyFormComponent } from './component/customer/customer-renewal/renew-policy-form/renew-policy-form.component';
import { RenewMsgComponent } from './component/customer/customer-renewal/renew-policy-form/renew-msg/renew-msg.component';
import { RenewPolicyInfoComponent } from './component/customer/customer-renewal/renew-policy-info/renew-policy-info.component';
import { ViewPolicyComponent } from './component/customer/my-policies/view-policy/view-policy.component';
import { ChoosePolicyComponent } from './component/customer/customer-claim/choose-policy/choose-policy.component';
import { ClaimFormComponent } from './component/customer/customer-claim/claim-form/claim-form.component';
import { ClaimDocumentsComponent } from './component/customer/customer-claim/claim-documents/claim-documents.component';
import { AccidentDetailsComponent } from './component/customer/customer-claim/accident-details/accident-details.component';
import { ClaimMsgComponent } from './component/customer/customer-claim/claim-msg/claim-msg.component';

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
        path:"edit-profile",component:EditProfileComponent,canActivate:[AuthGuard]
    },
    {
        path:"my-policies",component:MyPoliciesComponent,canActivate:[AuthGuard]
    },
    {
        path:"complain",component:CustomerComplainComponent,canActivate:[AuthGuard]
    },
    {
        path:"customer-policy",component:CustomerPolicyComponent,canActivate:[AuthGuard]
    },
    {
        path:"policy-info/:id",component:PolicyInfoComponent,canActivate:[AuthGuard]
    },
    {
        path:"view-policy/:id",component:ViewPolicyComponent,canActivate:[AuthGuard]
    },
    {
        path:"renew-policy-info/:id",component:RenewPolicyInfoComponent,canActivate:[AuthGuard]
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
        path:"buy-msg",component:BuyMsgComponent
    },
    {
        path:"complain-options",component:ComplainOptionsComponent
    },
    {
        path:"complain-form/:id",component:ComplainFormComponent
    },
    {
        path:"all-complains",component:AllComplainsComponent
    },
    {
        path:"all-claims",component:AllClaimsComponent
    },
    {
        path:"renew-policy-form",component:RenewPolicyFormComponent,canActivate:[AuthGuard]
    },
    {
        path:"renew-msg",component:RenewMsgComponent,canActivate:[AuthGuard]
    },
    {
        path:"choose-claim-policy",component:ChoosePolicyComponent,canActivate:[AuthGuard]
    },
    {
        path:"claim-form",component:ClaimFormComponent,canActivate:[AuthGuard]
    },
    {
        path:"claim-documents/:id",component:ClaimDocumentsComponent,canActivate:[AuthGuard]
    },
    {
        path:"accident-details",component:AccidentDetailsComponent,canActivate:[AuthGuard]
    },
    {
        path:"claim-msg",component:ClaimMsgComponent,canActivate:[AuthGuard]
    },









    {
        path:"logout",component:LogoutComponent
    },
    {
        path:"**",component:PageNotFoundComponent
    }



];
