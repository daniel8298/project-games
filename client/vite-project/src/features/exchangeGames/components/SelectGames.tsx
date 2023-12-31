import { useState } from "react";
import { Button } from "../../global/styles/components/Button.styled";
import { FlexSelectAndButton, Select } from "../styles/Exchange.styled";
import { GamesProps, Platform } from "../types/games";

const SelectGames = ({
  setGames,
  gamesArray,
  games,
  platforms,
}: GamesProps) => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedGame, setSelectedGame] = useState("");

  const renderPlatformOptions = (platforms: Platform[]) => {
    return platforms.map((platform) => (
      <option key={platform.id} value={platform.name}>
        {platform.name}
      </option>
    ));
  };

  const renderGameOptions = (selectedPlatform: string) => {
    if (selectedPlatform) {
      const filteredGames = games.filter(
        (game) => game.platforms === selectedPlatform
      );
      return filteredGames.map((game) => (
        <option key={game._id} value={game.name}>
          {game.name}
        </option>
      ));
    }
    return [];
  };

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlatform(e.target.value);
    setSelectedGame("");
  };

  const handleAddGame = () => {
    if (
      selectedGame &&
      !gamesArray.find((game) => game.name === selectedGame)
    ) {
      const selectedGameObject = games.find(
        (game) => game.name === selectedGame
      );
      if (selectedGameObject) {
        const newGame = selectedGameObject;
        // const newGame: Game = {
        //   name: selectedGameObject.name,
        //   id: selectedGameObject._id,
        //   platform: selectedPlatform,
        // };
        setGames([...gamesArray, newGame]);
        setSelectedGame("");
      }
    }
  };

  return (
    <FlexSelectAndButton>
      <Select onChange={handlePlatformChange} value={selectedPlatform}>
        <option value="">Select Platform</option>
        {renderPlatformOptions(platforms)}
      </Select>
      <Select
        onChange={(e) => setSelectedGame(e.target.value)}
        value={selectedGame}
        disabled={!selectedPlatform}
      >
        <option value="">Select Game</option>
        {renderGameOptions(selectedPlatform)}
      </Select>
      <Button
        bg="black"
        color="white"
        onClick={handleAddGame}
        disabled={!selectedGame}
      >
        Add Game
      </Button>
    </FlexSelectAndButton>
  );
};

export default SelectGames;
