import { FormsModule } from '@angular/forms'

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListComponent } from './list.component';
import { ListCardCharacterComponent } from './components/list-card-character/list-card-character.component';
import { ListCharacterDetailsComponent } from './components/list-character-details/list-character-details.component';
import { ListCharacterBiographyComponent } from './components/list-character-details/list-character-biography/list-character-biography.component';
import { ListCharacterConnectionsComponent } from './components/list-character-details/list-character-connections/list-character-connections.component';
import { ListCharacterImageComponent } from './components/list-character-details/list-character-image/list-character-image.component'

@NgModule({
  declarations: [ListComponent, ListCardCharacterComponent, ListCharacterDetailsComponent, ListCharacterBiographyComponent, ListCharacterConnectionsComponent, ListCharacterImageComponent],
  imports: [CommonModule, 
            FormsModule 
            ],

  exports: [ListComponent],
})
export class ListModule {}
