import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

import '../styles/GifGallery.css';

class GifGallery extends React.Component {
  state = {
    gifs: [],
  };

  fetchGifs = () => {
    let url;
    if (this.props.searchValue === '') {
      url = `https://api.giphy.com/v1/gifs/search?api_key=fyaOW4HVtHdBYRoBWfLiI06pfzfNX7tV&limit=10&offset=${this.state.gifs.length}&q=smile`;
    } else {
      url = `https://api.giphy.com/v1/gifs/search?api_key=fyaOW4HVtHdBYRoBWfLiI06pfzfNX7tV&limit=10&offset=${this.state.gifs.length}&q=${this.props.searchValue}`;
    }
    axios.get(url).then((res) => {
      this.setState({ gifs: [...this.state.gifs, ...res.data.data] });
    });
  };

  componentDidMount() {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=fyaOW4HVtHdBYRoBWfLiI06pfzfNX7tV&limit=10&offset=${this.state.gifs.length}&q=smile`
      )
      .then((res) => {
        console.log(res);
        this.setState({ gifs: res.data.data });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({ gifs: [] });
      this.fetchGifs();
    }
  }

  render() {
    return (
      <article>
        <section className="GifSection">
          <InfiniteScroll
            dataLength={this.state.gifs.length}
            next={this.fetchGifs}
            hasMore={true}
          >
            <div className="container my-container">
              <div className="row justify-content-between my-row">
                {this.state.gifs.length === 0
                  ? ''
                  : this.state.gifs.map((gif) => (
                      <div className="col-md-4 col-sm-6 gifBox" key={gif.id}>
                        <img
                          className="gifImage"
                          alt={gif.id}
                          src={gif.images.downsized.url}
                        />
                      </div>
                    ))}
              </div>
            </div>
          </InfiniteScroll>
        </section>
      </article>
    );
  }
}

export default GifGallery;
