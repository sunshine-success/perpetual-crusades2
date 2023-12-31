import React, { Component } from "react";
import {
  AncientWizard,
  BanefulBlueDragon,
  FieryRedDragon,
  MightyKnight,
  NoxiousGreenDragon,
  StealthyRogue,

  TilesAncientWizard,
  TilesBanefulBlueDragon,
  TilesFieldsofDestiny,
  TilesFieryRedDragon,
  TilesMightyKnight,
  TilesMythicKingdomofFriendship,
  TilesNoxiousGreenDragon,
  TilesStealthyRogue,
} from "../assets";

const characterComponents = {
  "Baneful Blue Dragon": BanefulBlueDragon,
  "Fiery Red Dragon": FieryRedDragon,
  "Noxious Green Dragon": NoxiousGreenDragon,
  "Ancient Wizard": AncientWizard,
  "Mighty Knight": MightyKnight,
  "Stealthy Rogue": StealthyRogue,
};

const tilesComponents = {
  "Mythic Kingdom of Friendship": TilesMythicKingdomofFriendship,
  "Ancient Wizard": TilesAncientWizard,
  "Mighty Knight": TilesMightyKnight,
  "Stealthy Rogue": TilesStealthyRogue,
  "Baneful Blue Dragon": TilesBanefulBlueDragon,
  "Fiery Red Dragon": TilesFieryRedDragon,
  "Noxious Green Dragon": TilesNoxiousGreenDragon,
  "Fields of Destiny": TilesFieldsofDestiny,
};

class Instructions extends Component {
  state = {
    characters: [
      "Ancient Wizard",
      "Mighty Knight",
      "Stealthy Rogue",
      "Baneful Blue Dragon",
      "Fiery Red Dragon",
      "Noxious Green Dragon",
    ],
    tiles: [
      "Mythic Kingdom of Friendship",
      "Ancient Wizard",
      "Mighty Knight",
      "Stealthy Rogue",
      "Baneful Blue Dragon",
      "Fiery Red Dragon",
      "Noxious Green Dragon",
      "Fields of Destiny",
    ],
  };

  onClose = (event) => {
    this.props.onClose(event);
  };
  render() {
    if (!this.props.displayInstruction) {
      return null;
    }
    return (
      <div className="instructions">
        <h2 style={{ textAlign: "center" }}>Game Instructions</h2>
        <br />
        <br />
        <div className="content">
          <ul
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {this.state.characters.map((character) => {
              const CharacterComponent = characterComponents[character];
              return (
                <img
                  className="character"
                  src={CharacterComponent}
                  width="75px"
                  height="auto"
                  alt={character}
                />
              )
            }
            )}
          </ul>
          <ul
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {this.state.tiles.map((tile) => {
              const TilesComponent = tilesComponents[tile];
              return (
                <img
                  className="character"
                  src={TilesComponent}
                  width="75px"
                  height="auto"
                  alt={tile}
                />
              );
            }
            )}
          </ul>
          <ul>
            <li>The first player chooses a Humanoid character.</li>
            <li>The second player chooses a Dragon character.</li>
            <li>
              The Board appears, and Humanoid character begins by rolling a die!
            </li>
            <li>
              The player moves ahead the same number of tiles as the number on
              the die.
              <ul>
                <li>
                  If the player lands on their own tile, then their score is
                  incremented by 3.
                </li>
                <li>
                  If the player lands on their opponent's tile, then their score
                  is decremented by 1.
                </li>
                <li>
                  If the player lands on Fields of Destiny, they have an equal
                  chance of gaining or losing 2 points.
                </li>
                <li>
                  If the player lands on Mythic Kingdom of Friendship (start),
                  the player's score is not affected.
                </li>
              </ul>
            </li>
            <li>The first player to reach 20 points wins the game!</li>
          </ul>
        </div>
        <br />
        <br />
        <div>
          <button className="inverted-button" onClick={this.onClose}>
            Close Instructions
          </button>
        </div>
      </div>
    );
  }
}

export default Instructions;
