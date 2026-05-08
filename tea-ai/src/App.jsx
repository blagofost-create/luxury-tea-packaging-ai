import "./App.css";

function App() {
  const cards = [
    {
      title: "MANGO PARADISE",
      subtitle: "Golden tropical tea collection",
      image:
        "https://images.unsplash.com/photo-1553787499-6f913324e0ad?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "RUBY BLOOM",
      subtitle: "Luxury floral berry infusion",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "EXOTIC BLOOM",
      subtitle: "Passion fruit cinematic blend",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "ROYAL SUNSET",
      subtitle: "Premium glowing tea packaging",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #45106b 0%, #14051f 45%, #050109 100%)",
        padding: "40px",
        fontFamily: "Arial",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "70px",
          }}
        >
          <div>
            <div
              style={{
                color: "#ffb7ff",
                fontSize: "20px",
                marginBottom: "20px",
                letterSpacing: "4px",
              }}
            >
              PREMIUM FMCG AI PLATFORM
            </div>

            <h1
              style={{
                color: "white",
                fontSize: "92px",
                lineHeight: 0.95,
                margin: 0,
                fontWeight: "900",
                letterSpacing: "-4px",
              }}
            >
              LUXURY
              <br />
              TEA PACKAGING
            </h1>

            <p
              style={{
                color: "#dbc5ff",
                fontSize: "24px",
                maxWidth: "650px",
                marginTop: "30px",
                lineHeight: 1.7,
              }}
            >
              Cinematic tropical packaging concepts with glossy gradients,
              premium ornamental composition and luxury beverage branding
              aesthetics.
            </p>

            <div
              style={{
                display: "flex",
                gap: "25px",
                marginTop: "40px",
              }}
            >
              <button
                style={{
                  padding: "22px 48px",
                  borderRadius: "18px",
                  border: "none",
                  background:
                    "linear-gradient(135deg,#ff00aa,#ff7a00,#ffd500)",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow:
                    "0 0 30px rgba(255,0,180,0.4),0 0 60px rgba(255,140,0,0.3)",
                }}
              >
                Generate Collection
              </button>

              <button
                style={{
                  padding: "22px 48px",
                  borderRadius: "18px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                  color: "white",
                  fontSize: "20px",
                  cursor: "pointer",
                  backdropFilter: "blur(10px)",
                }}
              >
                View Showcase
              </button>
            </div>
          </div>

          <div
            style={{
              width: "500px",
              height: "620px",
              borderRadius: "40px",
              overflow: "hidden",
              position: "relative",
              boxShadow:
                "0 0 50px rgba(255,0,180,0.25),0 0 120px rgba(140,0,255,0.18)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1600&auto=format&fit=crop"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(10,0,20,0.95), rgba(10,0,20,0.1))",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "40px",
                left: "40px",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: "48px",
                  fontWeight: "800",
                }}
              >
                Tropical
                <br />
                Luxury Tea
              </div>

              <div
                style={{
                  color: "#ffc9ff",
                  marginTop: "18px",
                  fontSize: "20px",
                }}
              >
                AI generated cinematic packaging concepts
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "28px",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: "32px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                boxShadow:
                  "0 0 30px rgba(255,0,180,0.08),0 0 60px rgba(140,0,255,0.08)",
              }}
            >
              <div
                style={{
                  height: "280px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={card.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "28px",
                    fontWeight: "800",
                  }}
                >
                  {card.title}
                </div>

                <div
                  style={{
                    color: "#d8b9ff",
                    marginTop: "12px",
                    fontSize: "17px",
                    lineHeight: 1.6,
                  }}
                >
                  {card.subtitle}
                </div>

                <button
                  style={{
                    marginTop: "24px",
                    width: "100%",
                    padding: "16px",
                    borderRadius: "14px",
                    border: "none",
                    background:
                      "linear-gradient(135deg,#ff00aa,#7a00ff,#00cfff)",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                >
                  Open Concept
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;