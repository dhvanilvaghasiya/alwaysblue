import React, { useState } from "react";
import "./InvoiceGenerator.css";

export default function InvoiceGenerator(props) {
  return (
    <>
      <div className="container mt-1">
        <p
          className="text-center fs-1 mt-1"
          style={{
            fontFamily: "Rampart One, cursive",
            color: props.theme === "primary" ? "#0d6efd" : "white",
          }}
        >
          Invoice Generator
        </p>
      </div>

      <div
        class="container mt-4"
        style={{
          fontFamily: "Lato, sans-serif",
        }}
      >
        <div class="row ">
          <div class="col">
            {/* left side column that is for logo, company details and client details */}
            <div className="company-details">
              <input
                class={`form-control form-control w-75 mb-3 rounded-0 border-top-0 border-start-0 border-end-0 border-3 border-${props}`}
                type="text"
                placeholder="Your Company"
                aria-label=".form-control-lg example"
                style={{
                  color: props.theme === "primary" ? "black" : "white",
                  backgroundColor:
                    props.theme === "primary" ? "white" : "#464d54",
                }}
              />
              <input
                class={`form-control form-control-sm w-50 mb-3 rounded-0 border-top-0 border-start-0 border-end-0 border-3 `}
                type="text"
                placeholder="Your Name"
                aria-label="default input example"
                style={{
                  color: props.theme === "primary" ? "black" : "white",
                  backgroundColor:
                    props.theme === "primary" ? "white" : "#464d54",
                }}
              />
              <input
                class={`form-control form-control-sm w-50 mb-3 rounded-0 border-top-0 border-start-0 border-end-0 border-3`}
                type="text"
                placeholder="Company's Address"
                aria-label="default input example"
                style={{
                  color: props.theme === "primary" ? "black" : "white",
                  backgroundColor:
                    props.theme === "primary" ? "white" : "#464d54",
                }}
              />
              <input
                class={`form-control form-control-sm w-50 mb-3 rounded-0 border-top-0 border-start-0 border-end-0 border-3`}
                type="text"
                placeholder="City, State, Zip"
                aria-label="default input example"
                style={{
                  color: props.theme === "primary" ? "black" : "white",
                  backgroundColor:
                    props.theme === "primary" ? "white" : "#464d54",
                }}
              />
              <input
                class={`form-control form-control-sm w-50 mb-4 rounded-0 border-top-0 border-start-0 border-end-0 border-3`}
                type="text"
                placeholder="Country"
                aria-label="default input example"
                style={{
                  color: props.theme === "primary" ? "black" : "white",
                  backgroundColor:
                    props.theme === "primary" ? "white" : "#464d54",
                }}
              />
            </div>
          </div>
          <div class="col">
            <strong>
              <p
                className="text-end fs-1"
                style={{
                  fontFamily: "Lato, sans-serif",
                  color: props.theme === "primary" ? "#0d6efd" : "white",
                }}
              >
                INVOICE
              </p>{" "}
            </strong>
          </div>
        </div>
      </div>

      {/* container for client's details */}

      <div
        class="container mt-2"
        style={{
          fontFamily: "Lato, sans-serif",
        }}
      >
        <strong>
          <p
            className=" fs-3"
            style={{
              color: props.theme === "primary" ? "#0d6efd" : "white",
            }}
          >
            Bill To:
          </p>{" "}
        </strong>
        <div class="row ">
          <div class="col">
            {/* left side column that is for client's details */}
            <div className="clients-details">
              <input
                class={`form-control form-control w-75 mb-3 rounded-0 border-top-0 border-start-0 border-end-0 border-3 border-${props}`}
                type="text"
                placeholder="Your Client's Name"
                aria-label=".form-control-lg example"
                style={{
                  color: props.theme === "primary" ? "black" : "white",
                  backgroundColor:
                    props.theme === "primary" ? "white" : "#464d54",
                }}
              />
              <input
                class={`form-control form-control-sm w-50 mb-3 rounded-0 border-top-0 border-start-0 border-end-0 border-3 `}
                type="text"
                placeholder="Client's Address"
                aria-label="default input example"
                style={{
                  color: props.theme === "primary" ? "black" : "white",
                  backgroundColor:
                    props.theme === "primary" ? "white" : "#464d54",
                }}
              />
              <input
                class={`form-control form-control-sm w-50 mb-3 rounded-0 border-top-0 border-start-0 border-end-0 border-3`}
                type="text"
                placeholder="City, State, Zip"
                aria-label="default input example"
                style={{
                  color: props.theme === "primary" ? "black" : "white",
                  backgroundColor:
                    props.theme === "primary" ? "white" : "#464d54",
                }}
              />

              <input
                class={`form-control form-control-sm w-50 mb-4 rounded-0 border-top-0 border-start-0 border-end-0 border-3`}
                type="text"
                placeholder="Country"
                aria-label="default input example"
                style={{
                  color: props.theme === "primary" ? "black" : "white",
                  backgroundColor:
                    props.theme === "primary" ? "white" : "#464d54",
                }}
              />
            </div>
          </div>
          <div class="col text-end">
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label ">
                Invoice #
              </label>
              <input
                class={`form-control form-control w-75 mb-3 rounded-0 border-top-0 border-start-0 border-end-0 border-3 border-${props}`}
                type="text"
                placeholder="INV-A-123"
                aria-label=".form-control-lg example"
                style={{
                  color: props.theme === "primary" ? "black" : "white",
                  backgroundColor:
                    props.theme === "primary" ? "white" : "#464d54",
                }}
              />
            </div>
            <input
              class={`form-control form-control-sm w-50 mb-3 rounded-0 border-top-0 border-start-0 border-end-0 border-3 `}
              type="text"
              placeholder="Client's Address"
              aria-label="default input example"
              style={{
                color: props.theme === "primary" ? "black" : "white",
                backgroundColor:
                  props.theme === "primary" ? "white" : "#464d54",
              }}
            />
            <input
              class={`form-control form-control-sm w-50 mb-3 rounded-0 border-top-0 border-start-0 border-end-0 border-3`}
              type="text"
              placeholder="City, State, Zip"
              aria-label="default input example"
              style={{
                color: props.theme === "primary" ? "black" : "white",
                backgroundColor:
                  props.theme === "primary" ? "white" : "#464d54",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
