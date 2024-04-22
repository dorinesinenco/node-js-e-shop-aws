--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg110+2)
-- Dumped by pg_dump version 16.2 (Debian 16.2-1.pgdg110+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id uuid NOT NULL,
    productid integer NOT NULL,
    fullname character varying(50) NOT NULL,
    emailaddress character varying(100) NOT NULL,
    phonenumber character varying(20),
    payed boolean DEFAULT false
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    price_amout integer NOT NULL,
    price_currency character varying(4) NOT NULL,
    image character varying(100)
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, productid, fullname, emailaddress, phonenumber, payed) FROM stdin;
f7e57455-f57d-4270-b583-f19346e2cee8	2	John Doe 301	jd301@example.host	123456301	f
5436456a-c276-4455-912b-387311952b77	2	John Doe 302	jd302@example.host	123456302	f
e2131597-1db5-4c1b-a9ac-f4f23c50ad5f	2	John Doe 302	jd302@example.host	123456302	f
11b57f2d-6d5f-485e-ab17-e969808c8eb6	2	John Doe 302	jd302@example.host	123456302	f
202bd1d1-3d5a-4283-86ec-57d9ad78d0ec	2	John Doe 302	jd302@example.host	123456302	f
3a7098ba-f7b7-4f0f-bd29-2d3f7f89b1d0	2	John Doe 302	jd302@example.host	123456302	f
7156f39c-ac28-4dd9-817a-cd66ae9d4358	2	John Doe 302	jd302@example.host	123456302	f
7717b609-19b4-4a16-a47b-5422ee501419	2	John Doe 302	jd302@example.host	123456302	f
e8f66961-c23b-4c0d-b42f-5122d0b6ff02	2	John Doe 302	jd302@example.host	123456302	f
273318f6-28e8-425e-9da4-874140e1b1bb	2	John Doe 303	jd303@example.host	123456303	t
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, price_amout, price_currency, image) FROM stdin;
1	Some Product 1	100	USD	no-photo-2.png
2	Another Product 2	200	USD	no-photo.webp
3	Product 3	2999	USD	no-photo.webp
\.


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: orders orders_productid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_productid_fkey FOREIGN KEY (productid) REFERENCES public.products(id);


--
-- PostgreSQL database dump complete
--

