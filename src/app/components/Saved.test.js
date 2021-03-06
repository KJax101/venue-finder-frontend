import React from "react";
import { shallow, mount } from "enzyme";
import "../setupTests";
import { Saved } from "./Saved";

const fetchSavedVenues = () => null;
const deleteVenue = () => null;
const fetchHours = () => null;
const hourResults = ["8pm"];
const savedVenues = [];

describe("<Saved />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Saved
        fetchSavedVenues={fetchSavedVenues}
        deleteVenue={deleteVenue}
        fetchHours={fetchHours}
        hourResults={hourResults}
        savedVenues={savedVenues}
      />
    );
  });
});

describe("<Saved /> props", () => {
  it("default state should render results", () => {
    expect(
      mount(
        <Saved
          fetchSavedVenues={fetchSavedVenues}
          deleteVenue={deleteVenue}
          fetchHours={fetchHours}
          hourResults={hourResults}
          savedVenues={savedVenues}
        />
      ).props().hourResults[0]
    ).toEqual("8pm");
  });
});

describe("<Saved /> callbacks", () => {
  it("Should fire the fetchSavedVenues callback when component mounts", () => {
    const fetchSavedVenues = jest.fn();
    const deleteVenue = jest.fn();
    const fetchHours = jest.fn();

    const hourResults = ["8pm"];
    const savedVenues = [];

    const wrapper = mount(
      <Saved
        fetchSavedVenues={fetchSavedVenues}
        deleteVenue={deleteVenue}
        fetchHours={fetchHours}
        hourResults={hourResults}
        savedVenues={savedVenues}
      />
    );
    expect(fetchSavedVenues).toHaveBeenCalled();
  });
});
