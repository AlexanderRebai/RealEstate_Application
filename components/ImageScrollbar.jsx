import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex alignItems="center" justifyContent="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                fontSize="2xl"
                cursor="pointer" />
        </Flex>
    );
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex alignItems="center" justifyContent="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                fontSize="2xl"
                cursor="pointer" />
        </Flex>
    );
}

const ImageScrollbar = ({ data }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: "hidden" }}>
        {data.map((image) => (
            <Box key={image.id} itemID={image.id} width="910px" overflow="hidden" p="1">
                <Image
                    alt="property"
                    placeholder="blur"
                    blurDataURL={image.url}
                    src={image.url}
                    width="1000"
                    height="500"
                    sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                />
            </Box>
        ))}
    </ScrollMenu>
);

export default ImageScrollbar;


export async function getServerSideProps({ params: { id } }) {

    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data
        },
    };
}