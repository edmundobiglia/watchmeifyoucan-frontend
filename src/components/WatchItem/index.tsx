import React, { useContext, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

import { WatchListContext } from "../../contexts/watchlist/watchListProvider";

import { RemoveFromWatchlistAction } from "../../contexts/watchlist/watchListActions";

import GlassesIcon from "../GlassesIcon";

import checkIcon from "../../assets/check.svg";
import trashIcon from "../../assets/trash.svg";
import errorIcon from "../../assets/error.svg";
import loaderIcon from "../../assets/loader.svg";

import { Item, DummyPoster, Warning } from "./styles";

interface Props {
  id: string;
  tmdbId: number;
  title: string;
  synopsis: string;
  posterUrl: string;
  releaseDate: Date;
  genres: string;
  isWatched: boolean;
}

const WatchItem = ({
  id,
  title,
  synopsis,
  posterUrl,
  releaseDate,
  genres,
  isWatched,
}: Props) => {
  const { dispatch } = useContext(WatchListContext);

  const [warning, setWarning] = useState("");
  const [settingAsWatched, setSettingAsWatched] = useState(false);

  const handleConfirmRemoval = () => {
    setWarning("removal");
  };

  const handleRemoveFromWatchlist = async () => {
    try {
      await axios.delete(`http://localhost:3333/watchlist/${id}`);

      dispatch(RemoveFromWatchlistAction(id));
    } catch (err) {
      setWarning("error");
    }
  };

  const handleSetAsWatched = async () => {
    setSettingAsWatched(true);

    try {
      console.log("before patch operation");

      await axios.patch(`http://localhost:3333/watchlist/${id}`, {
        is_watched: !isWatched,
      });

      setSettingAsWatched(false);

      dispatch(RemoveFromWatchlistAction(id));
    } catch (err) {
      setWarning("error");
    }
  };

  return (
    <Item>
      {posterUrl ? (
        <img className="poster" src={posterUrl} alt="Poster" />
      ) : (
        <DummyPoster>
          <GlassesIcon size={50} />

          <p>Poster Unavailabe</p>
        </DummyPoster>
      )}
      <div className="info">
        {warning && (
          <Warning>
            <img src={errorIcon} alt="Error" />

            {warning === "removal" && (
              <div>
                Confirm removal?
                <button onClick={handleRemoveFromWatchlist}>Yes</button>{" "}
                <button onClick={() => setWarning("")}>No</button>
              </div>
            )}

            {warning === "error" && (
              <div>
                Somewthing went wrong, try again.
                <button onClick={() => setWarning("")}>OK</button>
              </div>
            )}
          </Warning>
        )}
        <h3>{title}</h3>
        <small>{genres}</small>
        <h4>Release Date</h4>
        <p>{format(releaseDate, "MM/dd/yyyy")}</p>
        <h4>Synopsis</h4>
        <p>{synopsis}</p>
      </div>

      {!warning && (
        <div className="actions">
          <button onClick={handleSetAsWatched}>
            {settingAsWatched ? (
              <img src={loaderIcon} alt="Loader" />
            ) : (
              <img src={checkIcon} alt="Mark as Watched" />
            )}
          </button>

          <button onClick={handleConfirmRemoval}>
            <img src={trashIcon} alt="Remove" />
          </button>
        </div>
      )}
    </Item>
  );
};

export default WatchItem;
