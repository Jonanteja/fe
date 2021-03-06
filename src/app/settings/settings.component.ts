import { Component, Host, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GlobalEventManagerService } from '../system/global-event-manager.service';
import { CommonControllerService } from 'src/api/api/commonController.service';
import { take } from 'rxjs/operators';
import { NgbModalImproved } from '../system/ngb-modal-improved/ngb-modal-improved.service';
import { Router } from '@angular/router';
import { TypeDetailModalComponent } from '../type-detail-modal/type-detail-modal.component';
import { ProductControllerService } from 'src/api/api/productController.service';
import { CompanyControllerService } from 'src/api/api/companyController.service';
import { UserControllerService } from 'src/api/api/userController.service';
import { OrganizationService } from 'src/api-chain/api/organization.service';
import { UserService } from 'src/api-chain/api/user.service';
import { ChainFileInfo } from 'src/api-chain/model/chainFileInfo';
import { ProductService } from 'src/api-chain/api/product.service';
import { TabCommunicationService } from '../shared/tab-communication.service';
import { Subscription } from 'rxjs';
import { ComponentCanDeactivate } from '../shared-services/component-can-deactivate';
import { AuthorisedLayoutComponent } from '../layout/authorised/authorised-layout/authorised-layout.component';

@Component({
  template: ''
})
export class SettingsComponent extends ComponentCanDeactivate implements OnInit {


  activeTab = 0;

  submitted: boolean = false;
  labelsHelperLink = new FormControl(null);
  unpublishedProductLabelText = new FormControl(null);

  allFacilities: number = 0;
  showedFacilities: number = 0;
  allMeasurements: number = 0;
  showedMeasurements: number = 0;
  allActions: number = 0;
  showedActions: number = 0;
  allGrades: number = 0;
  showedGrades: number = 0;
  allProcEvidTypes: number = 0;
  showedProcEvidTypes: number = 0;
  allOrderEvidTypes: number = 0;
  showedOrderEvidTypes: number = 0;
  parentReloadProcEvidTypes: boolean = false;
  parentReloadOrderEvidTypes: boolean = false;
  parentReloadGrade: boolean = false;
  parentReloadFacility: boolean = false;
  parentReloadMeasure: boolean = false;
  parentReloadAction: boolean = false;


  constructor(
    protected globalEventsManager: GlobalEventManagerService,
    protected commonController: CommonControllerService,
    protected modalService: NgbModalImproved,
    protected router: Router,
    protected productController: ProductControllerService,
    protected companyController: CompanyControllerService,
    protected userController: UserControllerService,
    protected chainOrganizationService: OrganizationService,
    protected chainUserService: UserService,
    protected chainProductService: ProductService,
    // protected tabCommunicationService: TabCommunicationService
    // @Host() public authorizedLayout: AuthorisedLayoutComponent,
  ) {
    super()
  }

  public canDeactivate(): boolean {
    return (!this.labelsHelperLink || !this.labelsHelperLink.dirty) && (!this.unpublishedProductLabelText || !this.unpublishedProductLabelText.dirty)
  }

  ngOnInit(): void {
    this.initializeLabelsHelperLink();
  }


  // TABS ////////////////
  @ViewChild(AuthorisedLayoutComponent) authorizedLayout;
  rootTab = 0;
  tabs = [
    $localize`:@@settingsPage.tab0.title:Additional settings`,
    $localize`:@@settingsPage.tab1.title:Types`
  ];

  tabNames = [
    'additional',
    'types'
  ]

  selectedTab: Subscription;

  get tabCommunicationService(): TabCommunicationService {
    return this.authorizedLayout ? this.authorizedLayout.tabCommunicationService : null
  }

  targetNavigate(segment: string) {
    this.router.navigate(['settings', segment])
  }
  ngAfterViewInit() {
    this.selectedTab = this.tabCommunicationService.subscribe(this.tabs, this.tabNames, this.rootTab, this.targetNavigate.bind(this))
  }
  /////////////////////////

  onShow(event, type) {
    if (type === 'facility-types') this.showedFacilities = event;
    if (type === 'measurement-unit-types') this.showedMeasurements = event;
    if (type === 'action-types') this.showedActions = event;
    if (type === 'grade-abbreviation') this.showedGrades = event;
    if (type === 'processing-evidence-types') this.showedProcEvidTypes = event;
    if (type === 'order-evidence-types') this.showedOrderEvidTypes = event;
  }

  onCountAll(event, type) {
    if (type === 'facility-types') this.allFacilities = event;
    if (type === 'measurement-unit-types') this.allMeasurements = event;
    if (type === 'action-types') this.allActions = event;
    if (type === 'grade-abbreviation') this.allGrades = event;
    if (type === 'processing-evidence-types') this.allProcEvidTypes = event;
    if (type === 'order-evidence-types') this.allOrderEvidTypes = event;
  }

  ngOnDestroy() {
    this.tabCommunicationService.announceTabTitles([]);
    if (this.selectedTab) this.selectedTab.unsubscribe();
  }

  saveEnabled() {
    return (this.labelsHelperLink && this.labelsHelperLink.dirty) || (!this.labelsHelperLink && this.labelsHelperLink.dirty)
      || (this.unpublishedProductLabelText && this.unpublishedProductLabelText.dirty) || (!this.unpublishedProductLabelText && this.unpublishedProductLabelText.dirty)
  }

  async save() {
    let result = false;
    try {
      this.globalEventsManager.showLoading(true);
      let res = await this.commonController.updateGlobalSettingsUsingPOST(this.globalEventsManager.globalSettingsKeys('UNPUBLISHED_PRODUCT_LABEL_TEXT'), { value: this.unpublishedProductLabelText.value, isPublic: true }).pipe(take(1)).toPromise()
      if (res && res.status === 'OK') {
        this.unpublishedProductLabelText.markAsPristine();
        result = true;
      }
    } catch (e) {

    } finally {
      this.globalEventsManager.showLoading(false);
    }
    let result1 = false;
    try {
      this.globalEventsManager.showLoading(true);
      let res = await this.commonController.updateGlobalSettingsUsingPOST(this.globalEventsManager.globalSettingsKeys('PRODUCT_LABELS_HELPER_LINK'), { value: this.labelsHelperLink.value, isPublic: false }).pipe(take(1)).toPromise()
      if (res && res.status === 'OK') {
        this.labelsHelperLink.markAsPristine();
        result1 = true;
      }
    } catch (e) {

    } finally {
      this.globalEventsManager.showLoading(false);
    }
  }

  async initializeLabelsHelperLink() {

    let resp0 = await this.commonController.getGlobalSettingsUsingGET(this.globalEventsManager.globalSettingsKeys("PRODUCT_LABELS_HELPER_LINK")).pipe(take(1)).toPromise();
    if (resp0 && resp0.data && resp0.data.value) this.labelsHelperLink.setValue(resp0.data.value)

    let resp1 = await this.commonController.getGlobalSettingsUsingGET(this.globalEventsManager.globalSettingsKeys("UNPUBLISHED_PRODUCT_LABEL_TEXT")).pipe(take(1)).toPromise();
    if (resp1 && resp1.data && resp1.data.value) this.unpublishedProductLabelText.setValue(resp1.data.value)
  }

  newType(type) {
    let addTitle = ""
    if (type === 'facility-types') addTitle = $localize`:@@settingsPage.newFacilityType.addTitle:Add facility type`;
    if (type === 'measurement-unit-types') addTitle = $localize`:@@settingsPage.newMeasurementUnitType.addTitle:Add measurement unit type`;
    if (type === 'action-types') addTitle = $localize`:@@settingsPage.newActionType.addTitle:Add action type`;
    if (type === 'grade-abbreviation') addTitle = $localize`:@@settingsPage.newGradeAbbreviation.addTitle:Add grade abbreviation`;
    if (type === 'processing-evidence-types') addTitle = $localize`:@@settingsPage.newProcessingEvidenceType.addTitle:Add processing evidence type`;
    if (type === 'order-evidence-types') addTitle = $localize`:@@settingsPage.newOrderEvidenceType.addTitle:Add order evidence type`;

    this.modalService.open(TypeDetailModalComponent, {
      centered: true
    }, {
      title: addTitle,
      type: type,
      saveCallback: () => {
        if (type === 'facility-types') this.parentReloadFacility = !this.parentReloadFacility;
        if (type === 'measurement-unit-types') this.parentReloadMeasure = !this.parentReloadMeasure;
        if (type === 'action-types') this.parentReloadAction = !this.parentReloadAction;
        if (type === 'grade-abbreviation') this.parentReloadGrade = !this.parentReloadGrade;
        if (type === 'processing-evidence-types') this.parentReloadProcEvidTypes = !this.parentReloadProcEvidTypes;
        if (type === 'order-evidence-types') this.parentReloadOrderEvidTypes = !this.parentReloadOrderEvidTypes;
      }
    });
  }

  showTypes(type) {
    this.router.navigate(['/', 'settings', type]);
  }


  async mapping() {
    await this.userMapping();
    await this.companyMapping();
    await this.productMapping();
  }

  async companyMapping() {
    try {
      this.globalEventsManager.showLoading(true);
      let resp = await this.companyController.listCompaniesAdminUsingGET().pipe(take(1)).toPromise();
      if (resp && resp.status === "OK" && resp.data && resp.data.items) {
        for (let comp of resp.data.items) {
          let respComp = await this.companyController.getCompanyUsingGET(comp.id).pipe(take(1)).toPromise();
          if (respComp && 'OK' === respComp.status && respComp.data) {
            let c = respComp.data;
            let obj = {
              id: c.id,
              name: c.name,
              email: c.email,
              about: c.about,
              phone: c.phone,
              headquarters: c.headquarters,
              logo: c.logo as ChainFileInfo,
              manager: c.manager ? c.manager : "",
              mediaLinks: c.mediaLinks ? c.mediaLinks : {},
              webPage: c.webPage ? c.webPage : "",
              abbreviation: c.abbreviation ? c.abbreviation : "",
              entityType: 'company'
            }
            delete obj.logo['id'];
            let res = await this.chainOrganizationService.postOrganization(obj).pipe(take(1)).toPromise()
            if (res && 'OK' != res.status) {
              console.log("ORGANIZATION NOT imported to CHAIN", res);
            }
          } else {
            console.log("CANNOT access COMPANY from JAVA apis", respComp);
          }
        }
      }
    } catch (e) {

    } finally {
      this.globalEventsManager.showLoading(false);
    }
  }

  async userMapping() {
    try {
      this.globalEventsManager.showLoading(true);
      let resp = await this.userController.adminListUsersUsingGET().pipe(take(1)).toPromise();
      if (resp && resp.status === "OK" && resp.data && resp.data.items) {

        for (let user of resp.data.items) {
          let obj = {
            id: user.id,
            email: user.email,
            name: user.name,
            surname: user.surname,
            role: user.role,
            status: user.status
          }
          let res = await this.chainUserService.postUser(obj).pipe(take(1)).toPromise()
          if (res && 'OK' != res.status) {
            console.log("USER NOT imported to CHAIN", res);
          }
        }
      }
    } catch (e) {

    } finally {
      this.globalEventsManager.showLoading(false);
    }
  }


  async productMapping() {
    try {
      this.globalEventsManager.showLoading(true);
      let resp = await this.productController.listProductsAdminUsingGET().pipe(take(1)).toPromise();
      if (resp && resp.status === "OK" && resp.data && resp.data.items) {
        for (let prod of resp.data.items) {
          let respProd = await this.productController.getProductUsingGET(prod.id).pipe(take(1)).toPromise();
          if (respProd && 'OK' === respProd.status && respProd.data) {
            let p = respProd.data;
            let organizationRoles = [];
            if (p.associatedCompanies && p.associatedCompanies.length > 0) {
              for (let com of p.associatedCompanies) {
                let assocComp = {
                  companyId: com.company.id,
                  role: com.type
                }
                organizationRoles.push(assocComp);
              }
            }
            let labels = [];
            let respProd1 = await this.productController.getProductLabelsUsingGET(prod.id).pipe(take(1)).toPromise();
            if (respProd1 && "OK" == respProd1.status && respProd1.data) {
              for (let d of respProd1.data) {
                let respProd2 = await this.productController.getProductLabelValuesUsingGET(d.id).pipe(take(1)).toPromise();
                if (respProd2 && "OK" === respProd2.status && respProd2.data) {
                  labels.push(respProd2.data);
                } else {
                  console.log("CANNOT ACCESS ProductLabelValues or no data", respProd2)
                }
              }
            } else {
              console.log("CANNOT ACCESS ProductLabelsValues or no data", respProd1)
            }
            let obj = {
              id: p.id,
              name: p.name,
              description: p.description,
              howToUse: p.howToUse ? p.howToUse : "",
              ingredients: p.ingredients ? p.ingredients : "",
              nutritionalValue: p.nutritionalValue ? p.nutritionalValue : "",
              origin: p.origin,
              photo: p.photo,
              process: p.process,
              responsibility: p.responsibility,
              sustainability: p.sustainability,
              keyMarketsShare: p.keyMarketsShare ? p.keyMarketsShare : {},
              companyId: p.company && p.company.id ? p.company.id : null,
              organizationRoles: organizationRoles,
              labels: labels
            }
            let res = await this.chainProductService.postProduct(obj).pipe(take(1)).toPromise()
            if (res && 'OK' != res.status) {
              console.log("PRODUCT NOT imported to CHAIN", res);
            }
          } else {
            console.log("CANNOT access PRODUCT from JAVA apis", respProd);
          }
        }
      }
    } catch (e) {

    } finally {
      this.globalEventsManager.showLoading(false);
    }
  }

}
