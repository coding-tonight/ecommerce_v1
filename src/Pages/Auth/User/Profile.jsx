import { Image, Card  } from "antd";

import AppLayout from "@/Layouts/AppLayout";

const Profile = () => {
  return (
    <>
      <AppLayout>
        <section className="container mx-auto mt-3">
          <Card>
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Card>
        </section>
      </AppLayout>
    </>
  );
};

export default Profile;
