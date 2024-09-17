import { Component } from '@angular/core';
import { TableColumn } from 'src/app/core/interfaces/tableColumn.interface';
import { DataTableComponent } from 'src/app/shared/data-table/data-table.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SponsorService } from '../../services/sponsor.service';
import { Sponsor, SponsorData } from 'src/app/core/interfaces/sponsors/sponsor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MaterialModule,
    DataTableComponent,
    CommonModule
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  readonly displayedColumns: TableColumn[] = [
    {
      key: 'sponsor_name',
      label: 'Sponsor Name',
      type: 'text'
    },
    {
      key: 'sponsor_type',
      label: 'Sponsor Type',
      type: 'text'
    },
    {
      key: 'email',
      label: 'Email',
      type: 'text'
    },
    {
      key: 'address',
      label: 'Address',
      type: 'text'
    },
    {
      key: 'contact_officers',
      subKey: 'contact_officer_name',
      label: 'Contact Officers',
      type: 'multi-value'
    }

  ];
  isLoading = true;
  routePath = 'sponsors'
  dataList: SponsorData[] = [];

  constructor(private _sponsorService: SponsorService) {

  }
  ngOnInit(): void {
    this.getDataList();
  }

  getDataList() {
    this._sponsorService.list().subscribe({
      next: (resp: Sponsor) => {
        this.dataList = resp.data
        this.isLoading = false
      }
    })
  }
}
