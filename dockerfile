ARG IMAG_VERSION=latest
FROM base-image as builder
COPY . .
RUN /gradlew -w clean build --no-daemon

FROM openjdk:11.0.5-streth as app
COPY --from=builder /app/build/lib*.jar  .
COPY --from=builder /app/build/resources/test/consumer ./contract
ENTRYPOINT ["./entrypoint.sh"]
CMD [""]


