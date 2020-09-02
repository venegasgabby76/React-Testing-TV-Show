import React from 'react';
import App from "./App";
import { render, waitFor } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import userEvent from '@testing-library/user-event'



jest.mock("./api/fetchShow.js");

//TEST THAT SEASONS RENDER IN THE DROP DOWN MENU
// using the same mock data that i used in the episode list.
test("seasons are being rendered in the drop down menu", async () => {
  mockFetchShow.mockResolvedValueOnce(mockData);
  //mockResolvedValueOnce will tell our test what to expect back from the function call

  const { getByText, getAllByText } = render(<App />);
  await waitFor(() => {
    getByText(/select a season/i);
  });
  const dropdown = getByText(/select a season/i);

  // using userEvent to simulate what would happen when the use actually clicks on the dropbox!
  // this is basically going to be giving us back the particular season that we are going to be clicking on (1-4) that is why we are saying it is going to be having a length of 1(beause we are only clicking on one particular)
  userEvent.click(dropdown);
  expect(getAllByText(/season /i)).toHaveLength(2);

});




// this is going to be the mock data
const mockData = {
  data: {
    id: 2993,
    url: "http://www.tvmaze.com/shows/2993/stranger-things",
    name: "Stranger Things",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Fantasy", "Science-Fiction"],
    status: "Running",
    runtime: 60,
    premiered: "2016-07-15",
    officialSite: "https://www.netflix.com/title/80057281",
    schedule: {
      time: "",
      days: ["Thursday"],
    },
    rating: {
      average: 8.7,
    },
    weight: 98,
    network: null,
    webChannel: {
      id: 1,
      name: "Netflix",
      country: null,
    },
    externals: {
      tvrage: 48493,
      thetvdb: 305288,
      imdb: "tt4574334",
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
    },
    summary:
      "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    updated: 1586341552,
    _links: {
      self: {
        href: "http://api.tvmaze.com/shows/2993",
      },
      previousepisode: {
        href: "http://api.tvmaze.com/episodes/1576476",
      },
    },
    _embedded: {
      episodes: [
        {
          id: 553946,
          url:
            "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
          name: "Chapter One: The Vanishing of Will Byers",
          season: 1,
          number: 1,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
          },
          summary:
            "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/553946",
            },
          },
        },

        {
          id: 578663,
          url:
            "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
          name: "Chapter Two: The Weirdo on Maple Street",
          season: 2,
          number: 2,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg",
          },
          summary:
            "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/578663",
            },
          },
        },
      ],
    },
  },
};
