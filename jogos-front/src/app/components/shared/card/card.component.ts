import { Component, Input } from '@angular/core';
import { Jogo } from 'src/app/model/jogo';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() jogo!: Jogo;
  faHeart = faHeart;

  constructor(private jogoService: JogoService) {

  }

  favoritarJogo(){
    this.jogoService.favoritarJogo(this.jogo.id).subscribe();
    this.jogo.esta_favoritado = !this.jogo.esta_favoritado;
  }

}
