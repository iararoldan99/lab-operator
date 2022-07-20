import React from "react";
import "../styles/Paragraph.css";
import Carousel from "../components/Carousel";

const TextParagraphs = () => {
  return (
    <div className="main-section">
      <h1>Automation in the Laboratory</h1>
      <p>
        The laboratory is the optimal environment for automation. Consisting of
        a complex array of equipment, from beakers and bunsen burners to
        incubators and centrifuges, it is an ecosystem that relies on
        standardisation, replicability and accuracy, features that make it
        well-suited to automation. Its purpose is to connect a researcher to
        their equipment, so they can access and control experiments at any time
        and from any location. With devices and machines able to operate with
        little human interference, automation can mean that repetitive
        laboratory tasks that used to be in the domain of the researcher, can be
        transferred over to machines that excel at carrying out a high-volume of
        repetitive tasks. <br></br>
        <br></br> It comes in a number of forms: there is the Identification
        automation system, collaborative bots (Co-Bots), Multi-Function
        Workstation, Laboratory Information Management System (LIMS), the
        Laboratory Execution System (LES), among others. Each system comes with
        its own advantages, and some suit a portion of laboratories better than
        others. Introducing automation into research and development has been
        shown to have a profound impact on the laboratory environment by
        increasing throughput and productivity whilst also maximising both
        machine and researcher potential.
      </p>
      <h1>Advantages of Lab Automation</h1>
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <ul>
              <li> Reduce Human Error </li>
              <li> Save Time and Effort</li>
            </ul>
          </div>
          <div class="col">
            <ul>
              <li> Unify Lab Devices</li>
              <li> Maximize All Data</li>
            </ul>
          </div>
          <div class="col"></div>
        </div>
      </div>

      <p>
        It is important to start thinking about implementing automation into the
        laboratory, as it can simplify data acquisition and allow for devices to
        be controlled remotely, giving you greater flexibility in the
        laboratory. <br></br>
        <br></br> With this system, aspects of conducting experiments are
        simplified and a high volume of tasks can be executed with precision and
        accuracy, reducing human error, which has often led to entire
        experiments having to be repeated. <br></br>
        <br></br> It has also had a significant impact on both the analytical
        and non-analytical elements of research operations. Implementation is
        expected to have an overwhelmingly positive impact on research yield,
        whilst also taking us one step closer to a connected laboratory
        environment.
      </p>
      <Carousel />
      <h1>Our Approach to Automation</h1>
      <h2>A Connected Ecosystem</h2>
      <p>
        Laboperator is a laboratory execution system that offers an agile
        approach to automation. It enables you to automate existing devices and
        equipment in your laboratory, connecting them to a centralised platform.
        By doing so, individual tasks can be coordinated more efficiently and
        data documentation can be fully automated. <br></br>
        <br></br> Automation brings many opportunities to the laboratory, but
        can be expensive and involve replacing existing fully functioning
        equipment. Our solution, however, builds on your existing laboratory
        features, making it more productive, agile and smart. <br></br>
        <br></br> Laboperator can also be used alongside other software such as
        the Electronic Laboratory Notebook (ELN) or Laboratory Information
        Management System, giving you options on where to transfer collected
        data.
      </p>
      <h2>Unlimited Workflows</h2>
      <p>
        Automation aims to connect the laboratory environment, streamlining
        workflows and alleviating the burden on scientists by giving them more
        control over their laboratory. With Laboperator you can access your
        devices from anywhere, offering a further layer of flexibility.<br></br>
        <br></br>
        Laboperator is more than just a simple lab automation tool because it
        combines step-by-step instructions containing manual and automated
        steps. In this way, you can use Laboperator throughout your experiment,
        from inception to its conclusion.<br></br> <br></br>You can use
        Laboperator with any number of devices and get them to execute a high
        volume of tasks with sequential steps. With additional connectivity
        between devices, your laboratory will become a smarter, more efficient
        eco-system.
      </p>
      <h2>Data on the go</h2>
      <p>
        Being a web-based application, Laboperator is accessible via every
        device allowing you to control all instruments and collect data from
        anywhere. <br></br> <br></br>Instead of collecting unrelated data
        points, Laboperator provides a comprehensive view of each value in
        relation to the experimental context. <br></br> <br></br>Map your data
        to specific steps in each run, to pin down variations while still
        keeping the bigger picture in mind.
      </p>
      <h2>Define routine work sequences</h2>
      <p>
        From simple processes to complex workflows: collect individual data
        points and define routine work sequences with several steps.<br></br>{" "}
        <br></br> Individual measurements let you collect data whenever you
        want, including after the completion of your experiment. <br></br>{" "}
        <br></br>Workflows guide you through the experiment and collect data
        from various steps including multiple instruments.
      </p>
      <h2>Collaborate within your team</h2>
      <p>
        Laboperator allows you to define custom access rights.<br></br>
        <br></br> Distribute protocols and workflows according to compliance
        regulations amongst authorized personnel.<br></br> <br></br>Share
        settings can be re-defined at any point of time and therefore easily
        expedite the onboarding of new team members to your processes.
      </p>
    </div>
  );
};

export default TextParagraphs;
