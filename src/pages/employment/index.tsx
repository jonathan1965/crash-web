import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';

const EmploymentLabour: NextPage = () => {
  return (
    <>
      <Head>
        <title>CERTA LAW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="relative bg-primary p-4 md:p-8 cursor-default flex flex-col items-center justify-center  min-h-[40vh] w-full bg-center bg-no-repeat bg-cover">
          <Image
            src="/assets/images/finance.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            loading="lazy"
            className="top-0 absolute z-0"
          />
          <div className="flex flex-col justify-center h-full top-0 absolute z-10 w-full md:max-w-6xl">
            <h1 className="text-2xl text-white md:text-4xl font-bold">
              Employment Labour
            </h1>
          </div>
        </div>
        <div className="bg-white p-4 md:px-8 py-8 md:py-12 flex flex-col items-center flex-grow w-full">
          <div className="w-full md:max-w-6xl flex flex-col">
            <article className="inline-grid md:grid-cols-3 gap-x-10 gap-y-5 mt-3 pb-4 md:pb-8 border-b border-primary">
              <div className="relative flex flex-col text-brand-yellow min-h-48 w-full">
                <Image
                  src="/assets/images/Labour.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  className="top-0 absolute z-0"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <section>
                  Our employment and labour lawyers are known for
                  theircreative, business-orientedcounselling skills
                  and, whennecessary, they are results-driven and
                  highly successfullitigators. CERTA represents local
                  and multinational businesseswith respect to the full
                  rangeof workforce-related issues,including
                  employment contracts, handbooks, and policies. The
                  employment lawyers at CERTA will work closely with
                  yourmanagement and humanresources professionals to
                  develop andmaintain clear, suitable employee
                  handbooks and policiescarefully tailored to meet
                  your business objectives. When itcomes to
                  employmentcontracts, we can help you draft
                  strong,enforceable restrictive covenants and
                  otherprovisions thatclearly inform employees of
                  their duties to their employer andprotect youagainst
                  the loss of confidential information,customers, and
                  other employees.
                </section>

                <section>
                  <br />
                  <br />
                  CERTA’s employment lawyers are known for
                  providingpractical, business- orientedsolutions. One
                  of the solutionsinvolves employment law-related
                  training. Clients repeatedlyask us to provide this
                  service. Since requests for employment lawtraining
                  can varydramatically from client to client, we
                  haveextensive experience in tailoring employment
                  lawtrainingprograms to meet your specific
                  objectives.
                </section>

                <p className="mt-4 text-primary">
                  Get more information by reaching out to us via email
                  info@certalaw.rw
                </p>
              </div>
            </article>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EmploymentLabour;
