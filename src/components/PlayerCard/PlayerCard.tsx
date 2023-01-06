import { DefaultBtn } from "styles/DefaultBtn";
import { StyledCard } from "./StyledPlayerCard";

export function PlayerCard() {

    return(
        <StyledCard>
            <div className="main_bg">
                <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg" alt="Foto do personagem" />
            </div>
            <div className="main_bgshadow" />
            <div className="user_icon">
                <img src="https://i.pinimg.com/736x/16/60/5b/16605b7feb6818fa06bcf18077945f24.jpg" alt="Icone do usuário" />
            </div>
            <div className="user_info">
                <div className="info_persona">
                    <h2>Nome do usuário</h2>
                    <span>Elo do usuário | Main do usuário</span>
                </div>
                <div className="info_bio">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi voluptates soluta ullam, dolor consectetur voluptas earum, fugit atque labore cumque. Error ex culpa, odio optio recusandae adipisci voluptatem expedita.</p>
                </div>
                <div className="info_btns">
                    <DefaultBtn green size="100%">Vamos jogar!</DefaultBtn>
                    <a href="#">Ver histórico de partida</a>
                </div>
            </div>
        </StyledCard>
    )
}