import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {
  private dialog:MatDialog = inject(MatDialog)

  openDialog(enterAnimation: string, exitAnimation: string, data?: any): void {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: { 
        name: "Usuario", 
        icon: 'info' 
      },
      enterAnimationDuration: enterAnimation,
      exitAnimationDuration: exitAnimation,
    });

    // Manejar el resultado después de que el diálogo se cierre
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        alert(`El usuario seleccionó: ${result.respuesta}`);
      } else {
        alert('El usuario canceló la acción.');
      }
    });
  }

    

  
}
