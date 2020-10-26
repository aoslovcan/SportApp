import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchFeed } from "../actions/index";
import { Player } from "video-react";
import "./style-feed.css";
import "../../node_modules/video-react/dist/video-react.css";
import ReactPaginate from "react-paginate";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { easings } from "react-animation";

const style = {
  animation: `pop-in ${easings.easeOutExpo} 1200ms forwards`,
};

function Feed() {
  const feed = useSelector((state) => state.feed.feed);

  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const perPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeed());
  }, []);

  useEffect(() => {
    const slice = feed.slice(offset, offset + perPage);
    setCurrentData(slice);
    setPageCount(Math.ceil(feed.length / perPage));
  }, [offset, feed]);

  const handlePageChange = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;
    setOffset(offset);
    setCurrentPage(selectedPage);
    const slice = feed.slice(offset, offset + perPage);
    setCurrentData(slice);
    setPageCount(Math.ceil(feed.length / perPage));
    //console.log(currentData);
  };

  return (
    <>
      <div className="feed">
        <div className="container">
          <div id="pagi">
            <ReactPaginate
              className="col-sm-4 offset-md-4"
              previousLabel={<ArrowBackIcon />}
              nextLabel={<ArrowForwardIcon />}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
          <div className="row">
            {currentData.map((m) => (
              <div className="col-md-4" key={m.id} style={style}>
                {" "}
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{m.athlete.name}</h5>
                    <p id="description" className="card-text">
                      {m.description}
                    </p>
                  </div>
                  <div className="card-body">
                    <Player
                      playsInline
                      poster={m.video.poster}
                      src={m.video.url}
                    />
                  </div>
                  <div className="card-body">
                    <a href="#" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Feed;