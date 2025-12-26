import { Container, Row, Col, Card, Badge, Nav, Tab, Image, Carousel, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import LicenseIcon from "../../Icon/LicenseIcon";
import FlooringIcon from "../../Icon/FlooringIcon";
import KitchenIcon from "../../Icon/KitchenIcon";
import BedRoomIcon from "../../Icon/BedroomIcon";
import ElectricityIcon from "../../Icon/ElectricityIcon";
import UserCard from "../../component/UserCard";
import MilestoneIcon from "../../Icon/MilestoneIcon";
import PaymentIcon from "../../Icon/PaymentIcon";
import DescriptionIcon from "../../Icon/DescriptionIcon";
import MilestoneCard from "../../component/MilestoneCard";
import PaymentCard from "../../component/PaymentCard";
import DocumentCard from "../../component/DocumentCard";
import { useLocation } from "react-router-dom";
import { getProjectDetailAPI } from "../../services/NetworkCall";
import { errorAlert } from "../../component/Alert";
import moment from "moment-timezone";
import { Loader } from "../../component/Loader";
import { PROJECT_STATUS_POSTED } from "../../helper/common_helper";


const ProjectDetail = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const projectId = location?.state?.data?.id;
  const [projectData, setProjectData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProjectsData = async () => {
    setLoading(true);
    const res = await getProjectDetailAPI({ id: projectId });
    if (res.success) {
      setProjectData(res.data);
    } else {
      errorAlert({ message: res.message });
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProjectsData()
  }, [location])

  const payments = [
    {
      date: "01 JAN 2025",
      title: "Milestone 01 - #4389830",
      transactionId: "#HS92948193",
      amount: 200,
      status: "pending",
      showPayButton: true,
    },
    {
      date: "01 FEB 2025",
      title: "Milestone 02 - #4389830",
      transactionId: "#HS92948193",
      amount: 200,
      status: "notStarted",
    },
    {
      date: "01 MAR 2025",
      title: "Milestone 03 - #4389830",
      transactionId: "#HS92948193",
      amount: 200,
      status: "notStarted",
    },
  ];


  return (
    <>
      <Loader show={loading} />
      <div className="d-flex min-vh-100">
        <Sidebar />
        <div className="flex-grow-1">
          <Header />
          <Container className="p-4" style={{ background: "#FBF5E6" }}>
            <h4 className="fw-bold mb-4 text-start">Project Detail</h4>

            {/* ===== TOP SECTION ===== */}
            <Row className="g-4 align-items-start">
              {/* Images */}
              <Col lg={5}>
                <Card className="border-0 rounded-4 overflow-hidden position-relative">
                  <Carousel
                    indicators={false}
                    activeIndex={activeIndex}
                    onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
                  >
                    {projectData?.files?.map((img, index) => (
                      <Carousel.Item key={index}>
                        <Image
                          className="d-block w-100"
                          src={img?.uri}
                          alt={`Project image ${index + 1}`}
                          style={{ height: "320px", objectFit: "cover" }}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>

                  {/* Image counter */}
                  {projectData?.files?.length > 1 && (
                    <Badge
                      bg="secondary"
                      className="position-absolute  bottom-0 p-2 start-0 m-3 rounded-pill"
                    >
                      {activeIndex + 1} / {projectData.files.length}
                    </Badge>
                  )}
                </Card>
              </Col>

              <Col lg={7}>
                <div className="d-flex justify-content-between mb-1 gap-3">
                  <div>
                    <h3 className="fw-bold text-start">{projectData?.title}</h3>
                    <p className="text-muted text-start text-wrap">
                      {projectData?.address}
                    </p>
                  </div>
                  <div className="text-end ">
                    ⭐ {projectData?.rating || 0}
                    <div className="text-muted small text-nowrap">{projectData?.createdAt
                      ? moment(projectData.createdAt).local().format("MMM D, YYYY")
                      : ""}</div>
                  </div>
                </div>

                {/* Services */}
                <Row className="g-1 mb-2">
                  {projectData?.services?.map((service, index) => (
                    <Col sm={6} key={index}>
                      <Card className="border-0 rounded-4 p-3 text-center">
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            src={service?.icon_url}
                            alt={service?.service_name}
                            width={24}
                            height={24}
                            rounded
                          />
                          <span>{service?.service_name}</span>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>

                {/* Customer detail Card */}
                <Row className="g-3">
                  <Row className="g-3">
                    {projectData?.customer && (
                      <Col sm={6}>
                        <UserCard
                          name={projectData?.customer?.name}
                          email={projectData?.customer?.email}
                          role="Customer"
                          color="warning"
                          avatar={projectData?.customer?.profile_url}
                        />
                      </Col>
                    )}


                    {/* Contractor profile Card */}
                    <Col sm={6}>
                      {projectData?.contractor === null ? (
                        <UserCard
                          showWaitingAssign={true}
                          color="warning"
                        />
                      ) : projectData?.contractor ? (
                        <UserCard
                          name={projectData?.contractor?.name}
                          email={projectData?.contractor?.email}
                          role="Contractor"
                          color="primary"
                          avatar={projectData?.contractor?.profile_url}
                        />
                      ) : null}
                    </Col>

                  </Row>
                </Row>

              </Col>
            </Row>

            {/* ===== TABS ===== */}
            <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
              <Nav
                variant="pills"
                className="mt-5 p-2 rounded-pill gap-2"
                style={{ background: "#F6E9C8" }}
              >
                <Nav.Link eventKey="description" className="d-flex align-items-center gap-2">
                  {activeTab === "description" && <DescriptionIcon active />}
                  {activeTab !== "description" && <DescriptionIcon />}
                  Descriptions
                </Nav.Link>
                {projectData?.status && projectData?.status != PROJECT_STATUS_POSTED && <>
                  <Nav.Link eventKey="milestone" className="d-flex align-items-center gap-2">
                    <MilestoneIcon active={activeTab === "milestone"} />
                    Milestone
                  </Nav.Link>

                  <Nav.Link eventKey="payment" className="d-flex align-items-center gap-2">
                    <PaymentIcon active={activeTab === "payment"} />
                    Payment
                  </Nav.Link>

                  <Nav.Link eventKey="documents" className="d-flex align-items-center gap-2">
                    <LicenseIcon active={activeTab === "documents"} />
                    Documents
                  </Nav.Link>
                </>
                }

              </Nav>


              <Tab.Content className="mt-4">
                <Tab.Pane eventKey="description">
                  <Card className="border-0 rounded-4 p-4 text-center">
                    <p className="text-muted mb-0">
                      {projectData?.description}
                    </p>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
              <Tab.Content className="mt-4">
                <Tab.Pane eventKey="milestone">
                  <Card className="border-0 rounded-4 p-4 text-center">
                    <Row >
                      <Stack direction="horizontal" gap={4} className="justify-content-start overflow-x-scroll pb-4 scrollbar-w-thin">
                        {projectData?.contractor?.milestones && projectData?.contractor?.milestones.map((item, index) => (
                          <Col key={index} xs={12} md={6} lg={4}>
                            <MilestoneCard
                              name={item?.milestone_name}
                              amount={item?.milestone_amount}
                              description={item?.milestone_description}
                              startDate={item?.milestone_start_date}
                              endDate={item?.milestone_end_date}
                              status={item?.status}
                            />
                          </Col>
                        ))}
                      </Stack>
                    </Row>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
              <Tab.Content className="mt-4">
                <Tab.Pane eventKey="payment">
                  <Card className="border-0 rounded-4 p-4 text-center">
                    <div className="bg-white rounded-4 p-4">
                      <Row className="g-4">
                        {payments.map((item, index) => (
                          <Col key={index} xs={12} md={6} lg={4}>
                            <PaymentCard
                              {...item}
                              onPay={() => alert(`Pay clicked for ${item.title}`)}
                            />
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
              <Tab.Content className="mt-4">
                <Tab.Pane eventKey="documents">
                  <Card className="border-0 rounded-4 p-4 text-center">
                    <div className="bg-white rounded-4 p-4">
                      <Row className="g-4">
                        {projectData?.documents && projectData.documents.map((doc, index) => (
                          <Col key={index} xs={12} sm={6} md={4}>
                            <DocumentCard
                              title={doc?.document_name}
                              onClick={() => window.open(doc.document_url, "_blank")}
                            />
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Container>
        </div>
      </div >
    </>
  );
};

export default ProjectDetail;
