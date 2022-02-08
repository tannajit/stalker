import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';
import { AdminService } from '../admin.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog'
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { Router } from '@angular/router';
import { UserInfoComponent } from '../user-info/user-info.component';
import * as _ from 'lodash';
import { SettingsService } from 'src/app/settings/settings.service';
import { ClientsService } from 'src/app/clients.service';
import { AlertDialogComponent } from 'src/app/alert-dialog/alert-dialog.component';
import Dexie from 'dexie';
import { IndexdbService } from 'src/app/indexdb.service';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  selectedUser
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  selectedStatus
  selectedRole
  selectedRoleTable
  selectedSector
  users = [];
  roles = []
  Sectors = []
  AllSectors = []
  version = 6;
  dataSource;
  columnsToDisplay = ['Name', 'CIN', 'Phone Number', 'Email', 'Role', 'Status', 'Actions'];
  dataSubject = new BehaviorSubject<Element[]>([]);
  dialogRef: MatDialogRef<ConfirmationDialogComponent>;
  dialogRef2: MatDialogRef<UserInfoComponent>;
  constructor(
    private adminService: AdminService,
    public dialog: MatDialog,
    private _router: Router,
    private index:IndexdbService,
    private changeDetectorRefs: ChangeDetectorRef,
    private _setting: SettingsService,
    private _admin: AdminService,
    private _client: ClientsService
  ) { 
    this.version=this.index.version
  }

  ngOnInit(): void {
    this.changeDetectorRefs.detectChanges();
    this.getUsers()
    this.getRoles()
    //this.getAllSectors()
    this.GetSectors()
    console.log("###" + this.selectedStatus)
  }

  public getAllSectors() {
    let db; let transaction;
    const request = window.indexedDB.open('off', this.version);
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log('Why didn\'t you allow my web app to use IndexedDB?!');
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      console.log('success');
      console.log(db);
      transaction = db.transaction(['sector'], 'readwrite');
      const objectStore = transaction.objectStore('sector');
      const objectStoreRequest = objectStore.getAll();
      objectStoreRequest.onsuccess = event => {
        var result = []
        const all = event.target.result;
        all.forEach(elm => {
          //console.log(elm)
          var element = elm.Valeur;
          result.push(element.nameSecteur)
          var obj = {
            id: element.nameSecteur,
            detail: element.nameSecteur + " - " + element.machine + " - " + element.info.geometry.properties.name
          }
          this.AllSectors.push(obj.id)
          this.Sectors.push(obj)
        });
        console.log("result^^^^^^^^^^^^^^^^", result)

      };
    };
  }

  getRoles() {
    // get roles list
    this._setting.getSettings('param=role').subscribe(res => {
      this.roles = res.details.roles
      console.log(res)
    })
  }


  getUsers() {
    this.adminService.getAllUsers().subscribe(res => {
      console.log("---")
      // console.log(res)
      var finalUsers=res.map(elem => {
        // elem.forEach(element => {
        //   var user = element;
        //   user.nameU = elem.name;
        //   user.name = elem.name.replace("-", " ")
        // });
        var user 
        var users=elem.map(elem=>{
          user= elem;
          user.nameU = elem.name;
          user.name = elem.name.replace("-", " ")
          return user;
        })
        // console.log(users)
        return users;
      
      });
      console.log("**********")
      console.log(finalUsers)
      this.users= finalUsers
      //this.users = 
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.data = this.users.reverse();
      this.dataSource.paginator = this.paginator;
    })
  }

  deleteUser(user) {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete this user?"
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // do confirmation actions (delete)
        // console.log("clicked yes")
        this.adminService.deleteUser(user).subscribe(res => {
        })
        this.getUsers()
        this.dataSource = new MatTableDataSource(this.users);
        this.changeDetectorRefs.detectChanges();
        this.openAlertDialog('The user is deleted successfully!')
        this.selectedRole = this.selectedSector = this.selectedStatus = undefined
      }
      this.dialogRef = null;
    });
  }

  updateUser(user) {
    console.log("rolesSelected", user);
    this.adminService.getUserRoles(user.email).subscribe(rolesSelected => {
      console.log("rolesSelected", rolesSelected);

      this._setting.getSettings('param=role').subscribe(res => {
        var Roles = res.details.roles
        this._router.navigateByUrl('/updateUser', { state: { dataUser: user, AddRole: false, rolesSelected: rolesSelected, userid: user.UserID, userrole: user.role, roles: Roles } });

      })
    })
  }
  ///
  async GetSectors() {

    var db = new Dexie("off").open().then((res) => {
      res.table("sector").each(element => {
        // console.log(element)
        var obj = {
          id: element.nameSecteur,
          detail: element.nameSecteur + " - " + element.machine + " - " + element.info.geometry.properties.name
        }
        this.AllSectors.push(obj.id)
        this.Sectors.push(obj)
      })
    });
  }
  ////
  AddNewuser() {

    this._setting.getSettings('param=role').subscribe(res => {
      var Roles = res.details.roles
      this._router.navigateByUrl('/addUser', { state: { roles: Roles } });

    })

  }

  openAlertDialog(message) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: message,
        buttonText: {
          ok: 'Ok',
        }
      }
    });
  }

  restoreUser(user) {

    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to bring back this user?"

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // do confirmation actions 
        // console.log("clicked yes")
        this.adminService.restoreUser(user).subscribe(res => {

        })
        this.getUsers()
        this.dataSource = new MatTableDataSource(this.users);
        this.changeDetectorRefs.detectChanges();
        this.openAlertDialog('The user is restored successfully!')
        this.selectedRole = this.selectedSector = this.selectedStatus = undefined
      }
      this.dialogRef = null;
    });


  }


  viewUserDetails(user) {

    this._setting.getSettings('param=role').subscribe(res => {
      var Roles = res.details.roles
      console.log("Roles", Roles);
      this.dialogRef2 = this.dialog.open(UserInfoComponent, { data: { data: user, roles: Roles } });

      //this._router.navigateByUrl('/updateUser', { state: { dataUser:user,AddRole:false,userid:user.UserID,userrole:user.role,roles:Roles} });

    })
  }

  // search input
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // filterage based on status select
  onChangeStatus($event) {
    console.log($event.value)
    console.log(this.selectedRole)
    console.log(this.selectedSector)
    if ($event.value == 'all') {
      console.log("status = all")
      // when we select all for status 
      let filtered = []
      _.filter(this.users, (item) => {


        if (this.selectedRole == 'all' && !this.selectedSector) {
          filtered = this.users
        } if (this.selectedSector == 'all' && !this.selectedRole) {
          filtered = this.users
        } if (this.selectedRole == 'all' && this.selectedSector == 'all') {
          filtered = this.users
        } if (!this.selectedRole && !this.selectedSector) {
          filtered = this.users
        } if (this.selectedRole && (!this.selectedSector || this.selectedSector == 'all') && this.selectedRole != 'all') {
          // when we select all for status and only the role is selected already
          if (item.role == this.selectedRole) {
            filtered.push(item)
          }
        } if (this.selectedSector && (!this.selectedRole || this.selectedRole == 'all') && this.selectedSector != 'all') {
          // when we select all for status and only the role is selected already
          item.sectors.forEach(element => {
            if (element.nameSecteur == String(this.selectedSector)) {
              filtered.push(item)
              console.log("#####")
            }
          })
        } if (this.selectedRole && this.selectedSector && (this.selectedRole != 'all' && this.selectedSector != 'all')) {
          // if we select all for status and the role and the sector ar both selected
          item.sectors.forEach(element => {
            if (item.role == this.selectedRole && element.nameSecteur == String(this.selectedSector)) {
              filtered.push(item)
              console.log("#####")
            }
          })

        } if (this.selectedSector && (!this.selectedRole) && this.selectedSector != 'all') {
          // if we select all for status knowing that only the sector is selected already
          item.sectors.forEach(element => {
            if (element.nameSecteur == String(this.selectedSector)) {
              filtered.push(item)
              console.log("#####")
            }
          })

        }


      })
      this.dataSource = new MatTableDataSource(filtered)



    } else {
      // let filteredData = _.filter(this.users,(item) =>{
      //   return item.status.toLowerCase() ==  $event.value.toLowerCase();
      // })
      // this.dataSource = new MatTableDataSource(filteredData);
      let filtered = []
      _.filter(this.users, (item) => {

        if ((!this.selectedRole || this.selectedRole == 'all') && (!this.selectedSector || this.selectedSector == 'all')) {
          // when we select a status and others are not selected  
          if (item.status.toLowerCase() == $event.value.toLowerCase()) {
            filtered.push(item)
          }
        } if (this.selectedRole && (!this.selectedSector || this.selectedSector == 'all')) {
          // when we select a status knowing that only the role is selected already
          if ((item.status.toLowerCase() == $event.value.toLowerCase()) && item.role == this.selectedRole) {
            filtered.push(item)
          }
        } if (this.selectedSector && (!this.selectedRole || this.selectedRole == 'all')) {
          // if we select the status knowing that only the sector is selected already
          item.sectors.forEach(element => {
            if (item.status.toLowerCase() == $event.value.toLowerCase() && element.nameSecteur == String(this.selectedSector)) {
              filtered.push(item)
              console.log("#####")
            }
          })

        } if (this.selectedRole && this.selectedSector) {
          // if we select a status and the role and the sector ar both selected
          item.sectors.forEach(element => {
            if (item.status.toLowerCase() == $event.value.toLowerCase() && item.role == this.selectedRole && element.nameSecteur == String(this.selectedSector)) {
              filtered.push(item)
              console.log("#####")
            }
          })

        }
      })
      this.dataSource = new MatTableDataSource(filtered)

    }
  }

  // filterage based on role select
  onChangeRole($event) {
    console.log(this.selectedRole)
    if ($event.value == 'all') {

      // when we select all for role and the others are not selected

      let filtered = []
      _.filter(this.users, (item) => {

        if (this.selectedStatus == 'all' && !this.selectedSector) {
          filtered = this.users
        } if (this.selectedSector == 'all' && !this.selectedStatus) {
          filtered = this.users;
        } if (this.selectedSector == 'all' && this.selectedStatus == 'all') {
          filtered = this.users
        } if (!this.selectedStatus && !this.selectedSector) {
          filtered = this.users
        } if (this.selectedStatus && (!this.selectedSector || this.selectedSector == 'all')) {
          // when we sellect all for role and the status is selected
          console.log("pyaa bani")
          if (item.status == this.selectedStatus) {
            filtered.push(item)
          }

        } if (this.selectedStatus && this.selectedSector) {
          // when we sellect all for role and the status and the sector ar both selected
          item.sectors.forEach(element => {
            if (item.status == this.selectedStatus && element.nameSecteur == String(this.selectedSector)) {
              filtered.push(item)
              console.log("#####")
            }
          })

        } if (this.selectedSector && (!this.selectedStatus || this.selectedStatus == 'all')) {
          // if we select all for role knowing that only the sector is selected already
          item.sectors.forEach(element => {
            if (element.nameSecteur == String(this.selectedSector)) {
              filtered.push(item)
              console.log("#####")
            }
          })

        }
      })
      this.dataSource = new MatTableDataSource(filtered)




    } else {
      let filtered = []
      _.filter(this.users, (item) => {

        if ((!this.selectedSector || this.selectedSector == 'all') && (!this.selectedStatus || this.selectedStatus == 'all')) {
          // when we select a role and others are not selected
          if (item.role.toLowerCase() == $event.value.toLowerCase()) {
            filtered.push(item)
          }
        } if (this.selectedStatus && (!this.selectedSector || this.selectedSector == 'all') && this.selectedStatus != 'all') {
          // when we select a role knowing that only the status is selected already
          if ((item.role.toLowerCase() == $event.value.toLowerCase()) && item.status == this.selectedStatus) {
            filtered.push(item)
          }
        } if (this.selectedSector && (!this.selectedStatus || this.selectedStatus == 'all') && this.selectedSector != 'all') {
          // if we select a role knowing that only the sector is selected already
          item.sectors.forEach(element => {
            if (item.role.toLowerCase() == $event.value.toLowerCase() && element.nameSecteur == String(this.selectedSector)) {
              filtered.push(item)
              console.log("#####")
            }
          })

        } if (this.selectedStatus && this.selectedSector && this.selectedStatus != 'all' && this.selectedSector != 'all') {
          // if we select a role and the status and the sector ar both selected
          item.sectors.forEach(element => {
            if (item.role.toLowerCase() == $event.value.toLowerCase() && item.status == this.selectedStatus && element.nameSecteur == String(this.selectedSector)) {
              filtered.push(item)
              console.log("#####")
            }
          })

        }
      })
      this.dataSource = new MatTableDataSource(filtered)
    }


  }

  // filterage based on sector select
  onChangeSector($event) {
    console.log(this.selectedSector)
    if ($event.value == 'all') {

      let filtered = []
      _.filter(this.users, (item) => {

        if (this.selectedStatus == 'all' && !this.selectedRole) {
          filtered = this.users
        } if (this.selectedRole == 'all' && !this.selectedStatus) {
          filtered = this.users
        } if (this.selectedRole == 'all' && this.selectedStatus == 'all') {
          filtered = this.users
        } if (!this.selectedStatus && !this.selectedRole) {
          filtered = this.users
        } if (this.selectedStatus && (!this.selectedRole || this.selectedRole == 'all') && this.selectedStatus != 'all') {
          // when we sellect all for sector and the status is selected
          console.log("pyaa bani")
          if (item.status == this.selectedStatus) {
            filtered.push(item)
          }
        } if (this.selectedStatus && this.selectedRole) {
          // when we sellect all for sector and the status and the role are both selected
          if (item.status == this.selectedStatus && item.role == this.selectedRole) {
            filtered.push(item)
          }

        } if (this.selectedRole && (!this.selectedStatus || this.selectedStatus == 'all') && this.selectedRole != 'all') {
          // if we select all for sector knowing that only the status is selected already
          if (item.role == this.selectedRole) {
            filtered.push(item)
          }

        }
      })
      this.dataSource = new MatTableDataSource(filtered)


    } else {
      let filtered = []
      this.users.forEach(element => {
        _.filter(element, (item) => {
          console.log(element)
          if ((!this.selectedRole || this.selectedRole == 'all') && (!this.selectedStatus || this.selectedStatus == 'all')) {
            // when we select a sector and others are not selected
            item.sectors.forEach(elm => {
              if (elm.nameSecteur == String($event.value)) {
                filtered.push(item)
                // console.log("#####")
              }
            })
          } if (this.selectedStatus && (!this.selectedRole || this.selectedRole == 'all') && this.selectedStatus != 'all') {
            // when we select a sector knowing that only the status is selected already
            item.sectors.forEach(el => {
              if (item.status == this.selectedStatus && el.nameSecteur == String($event.value)) {
                filtered.push(item)
                // console.log("#####")
              }
            })
  
          } if (this.selectedRole && (!this.selectedStatus || this.selectedStatus == 'all') && this.selectedRole != 'all') {
            // if we select a sector knowing that only the role is selected already
            item.sectors.forEach(elem => {
              if (item.role == this.selectedRole && elem.nameSecteur == String($event.value)) {
                filtered.push(item)
                // console.log("#####")
              }
            })
  
          } if (this.selectedStatus && this.selectedRole && this.selectedStatus != 'all' && this.selectedRole != 'all') {
            // if we select a sector and the status and the role ar both selected
            item.sectors.forEach(element => {
              if (item.role == this.selectedRole && item.status == this.selectedStatus && element.nameSecteur == String($event.value)) {
                filtered.push(item)
                // console.log("#####")
              }
            })
  
          }
        })
      });
      
      this.dataSource = new MatTableDataSource(filtered)
    }

  }
  anotherArray = this.Sectors;
  filterListCareUnit(val) {
    // console.log(val);

    this.Sectors = this.anotherArray.filter((unit) => unit.detail.toLowerCase().indexOf(val) > -1);
  }
  userselected=[]
  // select=true
  user2

  ngAfterViewInit() {
    // Set null value to value property for clear the selected item
      // document.getElementById('btn').onclick = () => {
      //   this.dropDownListObject.value = null;
      // }
  }
  @ViewChild('matRef') matRef: MatSelect;
  @ViewChild('opt') opt: MatOption;

  onSelectRole(role,users,event){
    console.log(this.matRef.options)
    // this.matRef.options.forEach((data: MatOption) =>{
    //   console.log("data",data.id)
    //   //  if(this.userselected[0]!=data.id)
    //   //  {
    //   //     this.userselected=[]
    //   //     this.user2=""
    //   // }
    //  data.deselect()
    // } 
    // );
    // const matSelect: MatSelect = event.source;
    // matSelect.writeValue(null);
    let userSelected =users[0].email  
    this.userselected.push(users[0].email)
    console.log("selected value",event);
    console.log("selected element", users[0].email);
    console.log("finall element", this.userselected[0]);

    // if(this.userselected[0]!=users[0].email){
    //   this.userselected=[]
    //   this.user2=""
    //   this.select=false
    // }
    //console.log("users",this.userselected)

    var user = users.forEach(element => {

      if(element.role == role){
        this.selectedUser={
          'role': role,
          'user': element
        }
      }
    });
    //console.log(this.selectedUser)
    //console.log("user selected",userSelected)

  }


}
