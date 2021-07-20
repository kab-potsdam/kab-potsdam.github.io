import React from "react";
import { useEffect } from "react";

import { StyleSheet } from "../../lib";
import { ScreenProps } from "../types";
import presets from "./homeScreen.module.scss";
import { Card, ContentCard, View, Text, InfoCard, About } from "../../components";
import { categories } from "../../data/data"
import { useHistory } from "react-router-dom";

import { pediatricians } from "../../data/data";

const HomeScreen: React.FC<ScreenProps> = (props) => {
  const { children, className, preset="default", style, ...rest } = props;

  const history = useHistory();

  const handleClick = (to: string) => {history.push(to)}

  useEffect(() => {

  }, [])

  return (
    <View
      {...rest}
      className={StyleSheet.className(presets[preset], className)}
      style={StyleSheet.style(style)}
    >
      <main>
        <ContentCard title="Aktuelles" >
          <Text text="Bereitschaftsdienst heute:" preset="subsubheader" />
          <InfoCard object={pediatricians.list[0]} />
          <Text text="Öffnungszeiten:" preset="subsubheader" />
          <Text text=""/>
          <table>
            <thead>
              <tr>
                <th>Tag</th>
                <th>Zeit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mittwoch</td>
                <td>14:00 bis 19:00 Uhr</td>
              </tr>
              <tr>
                <td>Freitag</td>
                <td>14:00 bis 19:00 Uhr</td>
              </tr>
              <tr>
                <td>Samstag</td>
                <td>08:00 bis 19:00 Uhr</td>
              </tr>
              <tr>
                <td>Sonntag</td>
                <td>08:00 bis 19:00 Uhr</td>
              </tr>
            </tbody>
          </table>

        </ContentCard>
        {categories.map((categorie) => {
          return <Card onClick={() => handleClick(categorie.path)} src={categorie.src} key={categorie.id} title={categorie.title} />
        })}
        <About />
      </main>
    </View>
  );
};

export default HomeScreen;
