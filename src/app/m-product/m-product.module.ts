import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule, NgbPaginationModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { QRCodeModule } from 'angular2-qrcode';
import { EllipsisModule } from 'ngx-ellipsis';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ComponentsModule } from '../components/components.module';
import { ContentsModule } from '../contents/contents.module';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { SystemModule } from '../system/system.module';
import { BatchDetailPageComponent } from './batch-detail-page/batch-detail-page.component';
import { PrefillLocationsFromProductModalComponent } from './batch-detail-page/prefill-locations-from-product-modal/prefill-locations-from-product-modal.component';
import { BatchEditModalComponent } from './batches-list/batch-edit-modal/batch-edit-modal.component';
import { BatchesListComponent } from './batches-list/batches-list.component';
import { MProductRoutingModule } from './m-product-routing.module';
import { ProductLabelFeedbackPageComponent } from './product-label-feedback-page/product-label-feedback-page.component';
import { ProductLabelStatisticsPageComponent } from './product-label-statistics-page/product-label-statistics-page.component';
import { StatisticsCardComponent } from './product-label-statistics-page/statistics-card/statistics-card.component';
import { FarmerStoryPhotosComponent } from './product-label/farmer-story-photos/farmer-story-photos.component';
import { LabelRedirectToProductPageComponent } from './product-label/label-redirect-to-product-page/label-redirect-to-product-page.component';
import { LabelSelectorCardComponent } from './product-label/label-selector/label-selector-card/label-selector-card.component';
import { LabelSelectorComponent } from './product-label/label-selector/label-selector.component';
import { NumberRowComponent } from './product-label/number-row/number-row.component';
import { PrefillProductSelectionModalComponent } from './product-label/prefill-product-selection-modal/prefill-product-selection-modal.component';
import { ProductLabelComponent } from './product-label/product-label.component';
import { ProductionRecordItemComponent } from './product-label/production-record-item/production-record-item.component';
import { ProductCardComponent } from './product-list/product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LanguageForLabelModalComponent } from './product-label/language-for-label-modal/language-for-label-modal.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductLabelComponent,
    LabelRedirectToProductPageComponent,
    BatchesListComponent,
    BatchDetailPageComponent,
    ProductLabelFeedbackPageComponent,
    ProductLabelStatisticsPageComponent,
    BatchEditModalComponent,
    StatisticsCardComponent,
    PrefillLocationsFromProductModalComponent,
    ProductionRecordItemComponent,
    FarmerStoryPhotosComponent,
    LabelSelectorComponent,
    NumberRowComponent,
    PrefillProductSelectionModalComponent,
    ProductionRecordItemComponent,
    LabelSelectorCardComponent,
    LanguageForLabelModalComponent
  ],
  imports: [
    CommonModule,
    MProductRoutingModule,
    // Clean up unnecessary
    SystemModule,
    ComponentsModule,
    LayoutModule,
    FontAwesomeModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPageScrollModule,
    ContentsModule,
    EllipsisModule,
    QRCodeModule,
    // BrowserAnimationsModule,
    NgbTimepickerModule,
    NgbDropdownModule,
    NgbPaginationModule,
    GoogleMapsModule,
    DragDropModule,
  ]
})
export class MProductModule { }
