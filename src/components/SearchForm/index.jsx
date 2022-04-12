import React, { useState } from "react";
import { BookContainer, PreviewBooks } from "..";
import Grid from "@mui/material/Grid";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';

export const SearchForm = () => {
  const [booksTitle, setBooksTitle] = useState("");
  const [formData, setFormData] = useState("");
  const book1 = "https://i.guim.co.uk/img/media/1d4b16d4c6703e9bec9174f1cadc278026de0647/0_75_1280_768/master/1280.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d036928c5974e9e8bfd87be5dcf37dd7"
  const book3 = "https://www.worldbook.com/Shared/Themes/MARCH2018%20[clone%20636722797491814421]/images/homepage/sept2020/spinescape-2021.jpg"
  const book2 = "https://i.ebayimg.com/images/g/uRgAAOSwoH9fjrNv/s-l300.jpg"

  const handleInput = (e) => {
    setFormData(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBooksTitle(formData);
    setFormData("");
  };

  return (
    <>
    <div className="d-flex align-items-center justify-content-center text-center mt-5 p-3" >
      <form action="" onSubmit={handleFormSubmit} id="SearchForm">
        <input
        //   type="text"
          onChange={handleInput}
          name="booksTitle"
          id="booksTitle"
          value={formData}
          placeholder="Search for books"
          type="search"
        />
        <button type="submit" id="SubmitButton">
          Search
        </button>
      </form>
      </div>

      <Grid container spacing={12}  direction="row"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}>
        <Grid item xs={6} md={3}>
          <PreviewBooks image={book1}  title="Harry Potter Books" desc="Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people)." />
        </Grid>
        <Grid item xs={6} md={3}>
          <PreviewBooks image={book3} title="Encyclopedia collection" desc="An encyclopedia (American English), encyclopædia, or encyclopaedia is a reference work or compendium providing summaries of knowledge either general or special to a particular field or discipline. Encyclopedias are divided into articles or entries that are often arranged alphabetically by article name and sometimes by thematic categories. Encyclopedia entries are longer and more detailed than those in most dictionaries. Generally speaking, encyclopedia articles focus on factual information concerning the subject named in the article's title."/>
        </Grid>
        <Grid item xs={6} md={3}>

          <PreviewBooks image={book2} title="Robin Steven Books" desc="Stevens's eleven book series Murder Most Unladylike consists of schoolgirl detectives, Hazel Wong and Daisy Wells, as they solve murders, as well as personal things. Hazel falls in love with American boy Alexander Arcardy, as Daisy struggles with her feelings for other girls. She eventually comes out to Hazel as she falls for Martita Torrera in book seven, Death In The Spotlight, and begins a relationship with Amina from Deepdean during 'Death Sets Sail. As well as ten full-length murder mysteries, there are also six mini mysteries featuring these characters." />
        </Grid>
       
      </Grid>

      <BookContainer data={booksTitle} />
    </>
  );
};
