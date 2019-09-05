import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyComponent } from './currency/currency.component';
import { CountryComponent } from './country/country.component';
import { CultureCodeComponent } from './culture-code/culture-code.component';
import { MaterialModule } from './material.module';

//import ngx-translate and the http loader
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { GenderComponent } from './gender/gender.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { SearchComponent } from './search/search.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { InputStringComponent } from './input-string/input-string.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { DialogComponent } from './dialog/dialog.component';
import { ButtonComponent } from './button/button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { DetailsButtonComponent } from './details-button/details-button.component';
import { PhoneTypeComponent } from './phone-type/phone-type.component';
import { AddressComponent } from './address/address.component';
import { PhoneComponent } from './phone/phone.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { BloodGroupComponent } from './blood-group/blood-group.component';
import { AddressTypeComponent } from './address-type/address-type.component';
import { DocumentTypeComponent } from './document-type/document-type.component';
import { EmploymentTypeComponent } from './employment-type/employment-type.component';
import { LanguageSkillComponent } from './language-skill/language-skill.component';
import { LeaveApprovalHistoryStatusComponent } from './leave-approval-history-status/leave-approval-history-status.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { LogActivityComponent } from './log-activity/log-activity.component';
import { MaritalStatusComponent } from './marital-status/marital-status.component';
import { MasterAccountTypeComponent } from './master-account-type/master-account-type.component';
import { NationalityComponent } from './nationality/nationality.component';
import { PostingModuleComponent } from './posting-module/posting-module.component';
import { PostingTypeComponent } from './posting-type/posting-type.component';
import { PromotionTypeComponent } from './promotion-type/promotion-type.component';
import { QualificationTypeComponent } from './qualification-type/qualification-type.component';
import { RelationComponent } from './relation/relation.component';
import { ReligionComponent } from './religion/religion.component';
import { RoleTypeComponent } from './role-type/role-type.component';
import { SubsPlanComponent } from './subs-plan/subs-plan.component';
import { TenantTypeComponent } from './tenant-type/tenant-type.component';
import { TrainingAchievementComponent } from './training-achievement/training-achievement.component';
import { TrainingTypeComponent } from './training-type/training-type.component';
import { TransactionTypeComponent } from './transaction-type/transaction-type.component';
import { TransferTypeComponent } from './transfer-type/transfer-type.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { DataTableComponent } from './data-table/data-table.component';
import { RouterModule } from '@angular/router';
import { LanguageComponent } from './language/language.component';
import { AddbuttonComponent } from './addbutton/addbutton.component';
import { BranchComponent } from './branch/branch.component';
import { NavigateDailogComponent } from './navigate-dailog/navigate-dailog.component';
import { DataTable2Component } from './data-table2/data-table2.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { SelectEmployeeComponent } from './select-search/select-employee/select-employee.component';
import { SelectParentSearchComponent } from './select-search/select-parent-search/select-parent-search.component';
import { SelectMasterAccountComponent } from './select-search/select-master-account/select-master-account.component';
import { DataTable3Component } from './data-table3/data-table3.component';
import { UploadComponent } from './upload/upload.component';
import { NumberDecimalComponent } from './number-decimal/number-decimal.component';
import { InputPhoneComponent } from './input-phone/input-phone.component';
import { InputAmountComponent } from './input-amount/input-amount.component';
import { ChipsComponent } from './chips/chips.component';
//import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DataTableEditableComponent } from './data-table-editable/data-table-editable.component';
import { FilterComponent } from './filter/filter/filter.component';
import { SubmitButton2Component } from './submit-button2/submit-button2.component';
import { MasterAccountOptionComponent } from './master-account-option/master-account-option.component';
import { PostingLevelComponent } from './posting-level/posting-level.component';
import { MasterAccountPropertTypeComponent } from './master-account-propert-type/master-account-propert-type.component';
import { EmailIconComponent } from './email-icon/email-icon.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { SheetTypeComponent } from './sheet-type/sheet-type.component';
import { EmployeePayslipStatusComponent } from './employee-payslip-status/employee-payslip-status.component';
import { CustomDatePickerComponent } from './custom-date-picker/custom-date-picker.component';
import { EarningDeductionTypeComponent } from './earning-deduction-type/earning-deduction-type.component';
import { SelectAdviceAuthorizerComponent } from './select-advice-authorizer/select-advice-authorizer.component';
import { DataTable4Component } from './data-table4/data-table4.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ShowMoreComponent } from './show-more/show-more.component';
import { InputAmountV2Component } from './input-amount-v2/input-amount-v2.component';
import { RoleTypeCpComponent } from './role-type-cp/role-type-cp.component';
import { UserTypeCpComponent } from './user-type-cp/user-type-cp.component';
import { ReportLevelComponent } from './report-level/report-level.component';
import { SubPropertyTypeComponent } from './sub-property-type/sub-property-type.component';
import { ComboboxGlobalComponent } from './combobox-global/combobox-global.component';

import { SearchWithSelectComponent } from './search-with-select/search-with-select.component';
import { UploadV2Component } from './upload-v2/upload-v2.component';

//required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  //return new TranslateHttpLoader(http, './assets/i18n/dashboard', '.json');
  //return new TranslateHttpLoader(http);
  return new TranslateHttpLoader(http, './src/assets/i18n/', '.json');
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        FormsModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        CurrencyComponent,
        CountryComponent,
        CultureCodeComponent,
        GenderComponent,
        ProgressBarComponent,
        SnackBarComponent,
        DatePickerComponent,
        InputEmailComponent,
        SearchComponent,
        InputPasswordComponent,
        ImageUploaderComponent,
        InputStringComponent,
        InputNumberComponent,
        DeleteButtonComponent,
        DialogComponent,
        ButtonComponent,
        EditButtonComponent,
        DetailsButtonComponent,
        PhoneTypeComponent,
        AddressComponent,
        PhoneComponent,
        InputTextareaComponent,
        BloodGroupComponent,
        AddressTypeComponent,
        DocumentTypeComponent,
        EmploymentTypeComponent,
        LanguageSkillComponent,
        LeaveApprovalHistoryStatusComponent,
        LeaveStatusComponent,
        LeaveTypeComponent,
        LogActivityComponent,
        MaritalStatusComponent,
        MasterAccountTypeComponent,
        NationalityComponent,
        PostingModuleComponent,
        PostingTypeComponent,
        PromotionTypeComponent,
        QualificationTypeComponent,
        RelationComponent,
        ReligionComponent,
        RoleTypeComponent,
        SubsPlanComponent,
        TenantTypeComponent,
        TrainingAchievementComponent,
        TrainingTypeComponent,
        TransactionTypeComponent,
        TransferTypeComponent,
        UserTypeComponent,
        DataTableComponent,
        LanguageComponent,
        AddbuttonComponent,
        BranchComponent,
        NavigateDailogComponent,
        DataTable2Component,
        BackButtonComponent,
        SubmitButtonComponent,
        SelectEmployeeComponent,
        SelectParentSearchComponent,
        SelectMasterAccountComponent,
        DataTable3Component,
        UploadComponent,
        NumberDecimalComponent,
        InputPhoneComponent,
        InputAmountComponent,
        ChipsComponent,
        DataTableEditableComponent,
        FilterComponent,
        SubmitButton2Component,
        MasterAccountOptionComponent,
        PostingLevelComponent,
        MasterAccountPropertTypeComponent,
        EmailIconComponent,
        SelectUserComponent,
        DownloadButtonComponent,
        SheetTypeComponent,
        EmployeePayslipStatusComponent,
        CustomDatePickerComponent,
        EarningDeductionTypeComponent,
        SelectAdviceAuthorizerComponent,
        DataTable4Component,
        SlideToggleComponent,
        ShowMoreComponent,
        InputAmountV2Component,
        RoleTypeCpComponent,
        UserTypeCpComponent,
        ReportLevelComponent,
        SubPropertyTypeComponent,
        ComboboxGlobalComponent,
      
        SearchWithSelectComponent,
      
        UploadV2Component
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CountryComponent,
        CultureCodeComponent,
        CurrencyComponent,
        GenderComponent,
        TranslateModule,
        MaterialModule,
        ProgressBarComponent,
        SnackBarComponent,
        DatePickerComponent,
        InputEmailComponent,
        SearchComponent,
        InputPasswordComponent,
        ImageUploaderComponent,
        InputStringComponent,
        InputNumberComponent,
        DeleteButtonComponent,
        DialogComponent,
        ButtonComponent,
        EditButtonComponent,
        DetailsButtonComponent,
        PhoneTypeComponent,
        AddressComponent,
        PhoneComponent,
        InputTextareaComponent,
        BloodGroupComponent,
        AddressTypeComponent,
        DataTableComponent,
        DocumentTypeComponent,
        EmploymentTypeComponent,
        LanguageSkillComponent,
        LeaveApprovalHistoryStatusComponent,
        LeaveStatusComponent,
        LeaveTypeComponent,
        LogActivityComponent,
        MaritalStatusComponent,
        MasterAccountTypeComponent,
        NationalityComponent,
        PostingModuleComponent,
        PostingTypeComponent,
        PromotionTypeComponent,
        QualificationTypeComponent,
        RelationComponent,
        ReligionComponent,
        RoleTypeComponent,
        SubsPlanComponent,
        TenantTypeComponent,
        TrainingAchievementComponent,
        TrainingTypeComponent,
        TransactionTypeComponent,
        TransferTypeComponent,
        UserTypeComponent,
        LanguageComponent,
        AddbuttonComponent,
        BranchComponent,
        NavigateDailogComponent,
        DataTable2Component,
        BackButtonComponent,
        SubmitButtonComponent,
        SelectEmployeeComponent,
        SelectParentSearchComponent,
        SelectMasterAccountComponent,
        DataTable3Component,
        UploadComponent,
        NumberDecimalComponent,
        InputPhoneComponent,
        InputAmountComponent,
        ChipsComponent,
        DataTableEditableComponent,
        FilterComponent,
        SubmitButton2Component,
        MasterAccountOptionComponent,
        PostingLevelComponent,
        MasterAccountPropertTypeComponent,
        EmailIconComponent,
        SelectUserComponent,
        DownloadButtonComponent,
        SheetTypeComponent,
        EmployeePayslipStatusComponent,
        CustomDatePickerComponent,
        EarningDeductionTypeComponent,
        SelectAdviceAuthorizerComponent,
        DataTable4Component,
        SlideToggleComponent,
        ShowMoreComponent,
        InputAmountV2Component,
        RoleTypeCpComponent,
        UserTypeCpComponent,
        ReportLevelComponent,
        SubPropertyTypeComponent,
        ComboboxGlobalComponent,
        SearchWithSelectComponent,
        UploadV2Component
    ],
    providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
        { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
        { provide: MAT_DATE_LOCALE, useValue: localStorage.getItem('cultureCode') },
        DatePipe
    ],
    entryComponents: [DialogComponent, NavigateDailogComponent, ShowMoreComponent]
})
export class SharedModule {
}