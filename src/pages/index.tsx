import type { NextPage } from "next";
import { PieChart } from "react-minimal-pie-chart";
import {
  ChartComponent,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  PolarSeries,
  LineSeries,
  Category,
  ColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import Image from "next/image";
import { AdminLayout } from "@layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonGroup, Card, ProgressBar } from "react-bootstrap";
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import React from "react";
import dataJSON from "public/csvjson.json";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler
);

const getHeadings = () => {
  return Object.keys(dataJSON[0]);
};

const Home: NextPage = () => (
  <AdminLayout>
    <Card className="mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="mb-0">Bosch Information</h4>
            <div className="small text-black-50">Januar - Oktober 2022</div>
          </div>
          <div className="d-none d-md-block">
            <ButtonGroup aria-label="Toolbar with buttons" className="mx-3">
              <input
                className="btn-check"
                id="option1"
                type="radio"
                name="options"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="option1">
                Day
              </label>
              <input
                className="btn-check"
                id="option2"
                type="radio"
                name="options"
                autoComplete="off"
                defaultChecked
              />
              <label
                className="btn btn-outline-secondary active"
                htmlFor="option2"
              >
                Month
              </label>
              <input
                className="btn-check"
                id="option3"
                type="radio"
                name="options"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="option3">
                Year
              </label>
            </ButtonGroup>
            <Button variant="primary">
              <FontAwesomeIcon icon={faDownload} fixedWidth />
            </Button>
          </div>
        </div>
        <div
          style={{
            height: "450px",
            marginLeft: "0px",
            marginTop: "0px",
          }}
        >
          <ChartComponent
            primaryXAxis={{
              valueType: "Category",
              labelPlacement: "OnTicks",
            }}
            primaryYAxis={{
              minimum: 0,
              maximum: 100,
              interval: 10,
              labelFormat: "{value}%",
            }}
            tooltip={{ enable: true }}
          >
            <Inject
              services={[PolarSeries, ColumnSeries, Category, Tooltip]}
            ></Inject>
            <SeriesCollectionDirective>
              <SeriesDirective
                type="Polar"
                drawType="Column"
                name="Auslastung"
                dataSource={[
                  { x: "Beschafung", y: 60 },
                  { x: "Planung", y: 85 },
                  { x: "Controlling", y: 62 },
                  { x: "Marketing", y: 79 },
                  { x: "Vetrieb", y: 45 },
                  { x: "Logistik", y: 96 },
                  { x: "Verwaltung", y: 90 },
                ]}
                xName="x"
                yName="y"
                marker={{ visible: false }}
                isClosed={false}
              ></SeriesDirective>
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
        <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Gleitteile</div>
            <div className="fw-semibold">80.15%</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="primary"
              now={85}
            />
            <br />
            <div className="text-black-50">Diffrenzierte Teile</div>
            <div className="fw-semibold">65.15%</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="primary"
              now={55}
            />
          </div>
      </Card.Body>

      <Card.Footer>
        <div className="row row-cols-1 row-cols-md-5 text-center">
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Aufträge</div>
            <div className="fw-semibold"> 100 Auftragsmenge (31%)</div>
            <PieChart
              className="pie-char mt-2"
              data={[
                { title: "Kunden J", value: 13, color: "#E38627" },
                { title: "Kunde O", value: 10, color: "#C13C37" },
                { title: "Kunde L", value: 8, color: "#6A2135" },
              ]}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Auftragspreis</div>
            <div className="fw-semibold">2.737 Produktpreis (30%)</div>
            <PieChart
              className="pie-char mt-2"
              data={[
                { title: "Kunde J", value: 408, color: "#E38627" },
                { title: "Kunde O", value: 252, color: "#C13C37" },
                { title: "Kunde A", value: 223, color: "#6A2135" },
              ]}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Betrierbsstunden</div>
            <div className="fw-semibold"> letzte 3 Aufträge (10%)</div>
            <PieChart
              className="pie-char mt-2"
              data={[
                { title: "296", value: 557, color: "#E38627" },
                { title: "340", value: 2428, color: "#C13C37" },
                { title: "309", value: 5799, color: "#6A2135" },
              ]}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Durchlaufszeit</div>
            <div className="fw-semibold">letzte 3 Aufträge (13%)</div>
            <PieChart
              className="pie-char mt-2"
              data={[
                { title: "296", value: 296, color: "#E38627" },
                { title: "340", value: 340, color: "#C13C37" },
                { title: "309", value: 309, color: "#6A2135" },
              ]}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">max. Durchmesser</div>
            <div className="fw-semibold">80.15%</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="primary"
              now={85}
            />
            <br />
            <div className="text-black-50">min. Durchmesser</div>
            <div className="fw-semibold">65.15%</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="primary"
              now={55}
            />
          </div>
        </div>
      </Card.Footer>
    </Card>

    <div className="row">
      <div className="col-md-12">
        <Card className="mb-4">
          <Card.Header>Bosch information</Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <table className="table border mb-0">
                <thead className="table-light fw-semibold">
                  <tr className="align-middle">
                    {getHeadings().map((heading) => {
                      return <th key={heading}>{heading}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {dataJSON.map((row, index) => {
                    return (
                      <tr key={index}>
                        <td>{row.Auftragsnummer}</td>
                        <td>{row.Betriebsstunden}</td>
                        <td>{row.Biegespannung}</td>
                        <td>{row.Fügekraft}</td>
                        <td>{row["Komponenten-ID"]}</td>
                        <td>{row.Komponentendurchmesser}</td>
                        <td>{row.Komponentenlänge}</td>
                        <td>{row.Komponentenmasse}</td>
                        <td>{row.Kundenname}</td>
                        <td>{row.Produktpreis}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  </AdminLayout>
);

export default Home;